import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-tiempo',
  templateUrl: './tiempo.component.html',
  styleUrl: './tiempo.component.css'
})
export class TiempoComponent implements OnInit{ 

  formulario!: FormGroup;

  constructor(private fb: FormBuilder){
    this.iniciaFormulario();
  }

  ngOnInit(): void {

  }

  iniciaFormulario(){

    this.formulario = this.fb.group({
      ciudad: ['Santiago'],
      codigo: ['CL']
    })

  }

  consultar(){
    console.log("Formulario");
    console.log(this.formulario);
  }

}
