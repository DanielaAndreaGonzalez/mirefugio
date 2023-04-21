import { Component } from '@angular/core';
import { PetsService } from '../services/pets.service';

@Component({
  selector: 'app-mi-refuio-main',
  templateUrl: './mi-refuio-main.component.html',
  styleUrls: ['./mi-refuio-main.component.css']
})
export class MiRefuioMainComponent {


  constructor(private petsService: PetsService){ }

}
