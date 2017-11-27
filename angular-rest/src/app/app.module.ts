
import { ReactiveErrors } from '@angular/forms/src/directives/reactive_errors';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProjetoAngularComponent } from './projeto-angular/projeto-angular.component';
import { AngularFormComponent } from './angular-form/angular-form.component';

import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { ButtonModule } from 'primeng/components/button/button';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { PanelModule } from 'primeng/components/panel/panel';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { GrowlModule } from 'primeng/components/growl/growl';
import { SharedModule } from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    ProjetoAngularComponent,
    AngularFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    SharedModule,
    PanelModule,
    TooltipModule,
    GrowlModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
