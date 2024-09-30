import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent implements OnInit{

  ciudades = ["Santiago", "Bogota", "Lima", "El Salvador"]
  showCiudad: boolean = true;

  constructor(){}

  ngOnInit(): void {
  
  }

  mostrar(){
    this.showCiudad = !this.showCiudad;
  }

}
