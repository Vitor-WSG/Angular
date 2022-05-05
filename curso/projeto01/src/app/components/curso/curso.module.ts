import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from 'src/app/components/curso/curso.component';
import { CursoService } from './curso.service';
import { CadastroCursoComponent } from '../cadastro-curso/cadastro-curso.component'

@NgModule({
  declarations: [ //components que ficam somente nesse module
    CursoComponent,
  ],
  imports: [ 
    CommonModule
  ],
  exports:[ //inserir os componets que devem aparecer no app-module
    CursoComponent
  ],
  providers:[
    //CursoService
  ]
})
export class CursoModule { }
