import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UtilService } from '../../services/validations/util.service';
import { TemperaturaService } from '../../services/temperatura.service';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrl: './tiempo.component.css'
})
export class TiempoComponent implements OnInit{ 

  formulario!: FormGroup;
  tiempo: any;
  name: any;
  humedad: any;
  temperatura: any;
  latitud: any;
  longitud: any;
  descripcion: any;
  showError: boolean = false;
  mensajeError: string = "";
  fecha = new Date;

  constructor(private fb: FormBuilder, private _util: UtilService,
    private _tiempo: TemperaturaService){
    this.iniciaFormulario();
  }

  ngOnInit(): void {

  }

  iniciaFormulario(){

    this.formulario = this.fb.group({
      ciudad: ['',[Validators.required, this._util.noSantiago ,Validators.pattern('^[a-zA-Z ]*$')]],
      codigo: ['',[Validators.required, Validators.pattern('^[a-zA-Z ]*$')]]
    })

  }

  consultar(){
    console.log("Formulario");
    console.log(this.formulario);

    this._tiempo.getEstadoTiempo(this.formulario.get('ciudad')?.value, this.formulario.get('codigo')?.value)
      .subscribe((respuesta: any) =>{
          this.showError = false;
          this.tiempo = respuesta;
          this.name = this.tiempo.name;
          this.temperatura = this.tiempo.main.temp;
          this.humedad = this.tiempo.main.humidity;
          this.latitud = this.tiempo.coord.lat;
          this.longitud = this.tiempo.coord.lon;
          this.descripcion = this.tiempo.weather[0].description;

        console.log("respuesta: ", respuesta)
      },
      (error:any) => {
        this.showError = true;
        this.mensajeError = "Error al consultar API";
      
      })
  }

}
