//MODULO RAIZ 

import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project2Component } from './components/project2/project2.component';
import {CursoModule} from './components/curso/curso.module';
import { DataBindingComponent } from './components/data-binding/data-binding.component'


@NgModule({
  declarations: [
    AppComponent,
    Project2Component,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,// Modulo complementar
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
