import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetoAngularComponent } from './projeto-angular/projeto-angular.component';
import { AngularFormComponent } from './angular-form/angular-form.component';

import {InputTextModule, ButtonModule, DataTableModule, SharedModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    ProjetoAngularComponent,
    AngularFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
