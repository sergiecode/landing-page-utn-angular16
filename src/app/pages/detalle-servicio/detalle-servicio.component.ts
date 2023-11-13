import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IServicios } from 'src/app/modelos/servicio.model';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detalle-servicio',
  templateUrl: './detalle-servicio.component.html',
  styleUrls: ['./detalle-servicio.component.css']
})
export class DetalleServicioComponent implements OnInit {

  servicio?: IServicios
  loading: boolean = true
  error: string = ''

  constructor( 
    private _activatedRoute: ActivatedRoute,
    private _apiService: ApiService

    ) { }

  ngOnInit(): void {
    this._activatedRoute.params.subscribe({
      next: (params: Params) =>{
        this._apiService.getServicio(Number(params['id'])).subscribe({
          next: (data: IServicios) =>{
            this.servicio = data
            this.loading = false
          },
          error: (error: any) =>{
            this.error = error.error.msg
            console.log(error.error.msg)
          }
        })
      },
      error: (error: any) =>{
        console.log(error.error.msg)
      }
    })
  }


}
