import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlBase = 'https://api.openweathermap.org/data/2.5/weather';
const appId = 'da0448d122740fd84c9f6c558f5aaaf0';
@Injectable({
  providedIn: 'root'
})
export class TemperaturaService {

  constructor(private http: HttpClient) {}

  getEstadoTiempo(ciudad: string, codigo: string){
    const url = `${urlBase}?q=${ciudad},${codigo}&appid=${appId}`;
    return this.http.get(url);
  }
}
