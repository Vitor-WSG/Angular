//MODULO RAIZ 

import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project2Component } from './components/project2/project2.component';
import {CursoModule} from './components/curso/curso.module';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ContadorComponent } from './components/contador/contador.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component'


@NgModule({
  declarations: [
    AppComponent,
    Project2Component,
    DataBindingComponent,
    ContadorComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgClassComponent
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
