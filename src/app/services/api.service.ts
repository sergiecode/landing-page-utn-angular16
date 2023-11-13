import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IServicios } from '../modelos/servicio.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlBase: string = 'https://7csx60ms-3050.brs.devtunnels.ms'

  constructor(private _httpClient: HttpClient) { }

  public getServicios(): Observable<IServicios[]> {
    return this._httpClient.get<IServicios[]>(`${this.urlBase}/prestador`);
  }

  public getServicio(id: number): Observable<IServicios> {
    return this._httpClient.get<IServicios>(`${this.urlBase}/prestador/${id}`);
  }


}
