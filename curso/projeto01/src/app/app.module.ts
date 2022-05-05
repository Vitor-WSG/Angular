//MODULO RAIZ 

import { FormsModule } from '@angular/forms'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Project2Component } from './components/project2/project2.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { ContadorComponent } from './components/contador/contador.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgSwitchComponent } from './components/ng-switch/ng-switch.component';
import { NgClassComponent } from './components/ng-class/ng-class.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { AlteraCorDirective } from './shared/altera-cor.directive';
import { DiretivasCustomizadasComponent } from './components/diretivas-customizadas/diretivas-customizadas.component';
import { HighligthDirective } from './shared/highligth.directive';
import { CursoService } from './components/curso/curso.service';
import { CursoModule } from './components/curso/curso.module';
import { CadastroCursoModule } from './components/cadastro-curso/cadastro-curso.module';



@NgModule({
  declarations: [
    AppComponent,
    Project2Component,
    DataBindingComponent,
    ContadorComponent,
    NgIfComponent,
    NgSwitchComponent,
    NgClassComponent,
    NgContentComponent,
    NgStyleComponent,
    AlteraCorDirective,
    DiretivasCustomizadasComponent,
    HighligthDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CursoModule,// Modulo complementar
    CadastroCursoModule, //Modulo complementar
    FormsModule
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
