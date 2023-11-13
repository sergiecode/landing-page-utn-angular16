import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleServicioComponent } from './detalle-servicio.component';

describe('DetalleServicioComponent', () => {
  let component: DetalleServicioComponent;
  let fixture: ComponentFixture<DetalleServicioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetalleServicioComponent]
    });
    fixture = TestBed.createComponent(DetalleServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
