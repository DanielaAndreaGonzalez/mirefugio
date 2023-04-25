import { Component, Input } from '@angular/core';
import { Pets } from '../../interfaces/pets.interface';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent {

  @Input()
  public petsList:Pets[] = [];


}
