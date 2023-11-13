import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit{

  formularioContacto!: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formularioContacto = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      motivo: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  enviarFormulario(event: Event) {
    if(this.formularioContacto.valid){
      event.preventDefault();
      console.log(this.formularioContacto.value);
    }
  }

  hasError(formControlName: string, errorType: string){
    return this.formularioContacto.get(formControlName)?.hasError(errorType) 
    && this.formularioContacto.get(formControlName)?.touched;
  }

}
