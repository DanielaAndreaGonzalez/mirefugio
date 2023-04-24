import { Component,EventEmitter, Output } from '@angular/core';
import { Pets } from '../../interfaces/pets.interface';

@Component({
  selector: 'app-add-pets',
  templateUrl: './add-pets.component.html',
  styleUrls: ['./add-pets.component.css']
})
export class AddPetsComponent {

@Output()
public onNewPet: EventEmitter<Pets> = new EventEmitter();

public pet: Pets = 
{
  nombre:'',
  raza: '',
  edad :0,
  peso:0,
  fecha:new Date(),
  descripcion:''
}
emitPets():void{

  console.log(this.pet.nombre);

  if(this.pet.nombre.length === 0) return;
  this.onNewPet.emit(this.pet),
  this.pet = {nombre: '',
  raza: '',
  edad :0,
  peso:0,
  fecha:new Date(),
  descripcion:''
}

}



}
