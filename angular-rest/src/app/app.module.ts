import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetoAngularComponent } from './projeto-angular/projeto-angular.component';
import { AngularFormComponent } from './angular-form/angular-form.component';

import { FieldsetModule } from 'primeng/primeng';

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
    FieldsetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
