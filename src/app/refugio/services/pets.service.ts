import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor() {

    console.log("Desde el servicio");
   }
}
