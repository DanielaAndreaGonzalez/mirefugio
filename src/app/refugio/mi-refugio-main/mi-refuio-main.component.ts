import { Component } from '@angular/core';
import { PetsService } from '../services/pets.service';
import { Pets } from '../interfaces/pets.interface';

@Component({
  selector: 'app-mi-refuio-main',
  templateUrl: './mi-refuio-main.component.html',
  styleUrls: ['./mi-refuio-main.component.css']
})
export class MiRefuioMainComponent {


  constructor(private petsService: PetsService){ }

  get pets(): Pets[]{
    return [...this.petsService.pets];
  }

  onNewPet(pets: Pets)
  {
    this.petsService.addPets(pets);
    console.log(pets.nombre);
  }


}
