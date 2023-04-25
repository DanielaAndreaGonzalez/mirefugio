import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddPetsComponent } from './components/add-pets/add-pets.component';
import { MiRefuioMainComponent } from './mi-refugio-main/mi-refuio-main.component';
import { ListPetsComponent } from './components/list-pets/list-pets.component';
import { PetsService } from './services/pets.service';



@NgModule({
  declarations: [
    MiRefuioMainComponent,
    AddPetsComponent,
    ListPetsComponent
  ],
  exports: [
    MiRefuioMainComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    //Seria el singleton la unica instancia
    PetsService
  ]
  
})
export class MirefugioModule { }
