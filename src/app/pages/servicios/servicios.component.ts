import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IServicios } from 'src/app/modelos/servicio.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent implements OnInit {

  listaServicios: IServicios[] = []
  loading: boolean = true

  constructor(private _apiService: ApiService,
    private _router: Router) { }



  ngOnInit(): void {
    this._apiService.getServicios().subscribe({
      next: (data: IServicios[]) => {
        this.listaServicios = data
        this.loading = false
      },
      error: (error: any) => {
        console.log(error)
        this.loading = false
      },
    })
  }

  navegar(id: number) {
    this._router.navigate(['/servicios', id])
  }

}
