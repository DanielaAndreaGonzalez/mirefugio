import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiRefuioMainComponent } from './components/mi-refuio-main/mi-refuio-main.component';

@NgModule({
  declarations: [
    AppComponent,
    MiRefuioMainComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
