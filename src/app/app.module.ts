import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MirefugioModule } from './refugio/mirefugio.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MirefugioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
