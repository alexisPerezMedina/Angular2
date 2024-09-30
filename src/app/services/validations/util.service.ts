import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  noSantiago(control: FormControl){

    const value: string = control.value?.trim().toLowerCase();

    if( value === 'barcelona'){
      return {
        noSantiago: true
      }
    }
    return null;
  }
}
