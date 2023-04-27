import { Injectable } from '@angular/core';
import { Pets } from '../interfaces/pets.interface';
import { v4 as uuid } from 'uuid';
import { DatePipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

  constructor() {

    console.log("Desde el servicio");
   }


   public pets: Pets[] = [
    {
    id: uuid(),
    nombre:'Pelusa',
    raza: 'Pitbull',
    edad: 2,
    peso: 22,
    fecha: new Date(),
    descripcion:'Melena cafe',
    
    },
    {
    id: uuid(),
    nombre:'Lucas',
    raza: 'Basenji',
    edad: 2,
    peso: 22,
    fecha: new Date(),
    descripcion:'Melena cafe',
    },
    {
    id: uuid(),
    nombre:'Miti',
    raza: 'Labrador',
    edad: 2,
    peso: 22,
    fecha: new Date,
    descripcion:'Melena cafe',
    }
];

   addPets(pets: Pets):void
   {
    const newPets: Pets = {id: uuid(),...pets};
    this.pets.push(newPets);
   }

   deletePetById(id:String):void{
    this.pets = this.pets.filter(pets => pets.id != id);
   }

}
