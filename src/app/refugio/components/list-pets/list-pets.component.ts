import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pets } from '../../interfaces/pets.interface';

@Component({
  selector: 'app-list-pets',
  templateUrl: './list-pets.component.html',
  styleUrls: ['./list-pets.component.css']
})
export class ListPetsComponent {

  @Output()
  public onIndexDelete: EventEmitter<String> = new EventEmitter();

  @Input()
  public petsList:Pets[] = [];


  onDeletePet(id?:String):void{

    if(!id) return;
    this.onIndexDelete.emit(id);  
  }

}
