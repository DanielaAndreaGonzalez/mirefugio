import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiRefuioMainComponent } from './refugio/mi-refugio-main/mi-refuio-main.component';
import { AddPetsComponent } from './refugio/components/add-pets/add-pets.component';
import { ListPetsComponent } from './refugio/components/list-pets/list-pets.component';

@NgModule({
  declarations: [
    AppComponent,
    MiRefuioMainComponent,
    AddPetsComponent,
    ListPetsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
