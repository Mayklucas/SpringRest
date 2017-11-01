import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetinhoRestComponent } from './projetinho-rest/projetinho-rest.component';

@NgModule({
  declarations: [
    AppComponent,
    ProjetinhoRestComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
