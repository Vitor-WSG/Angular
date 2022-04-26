import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoComponent } from 'src/app/components/curso/curso.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import { CursoService } from './curso.service';

@NgModule({
  declarations: [ //components que ficam somente nesse module
    CursoComponent,
    CursoDetalheComponent
  ],
  imports: [ 
    CommonModule,
  ],
  exports:[ //inserir os componets que devem aparecer no app-module
    CursoComponent
  ],
  providers:[
    CursoService
  ]
})
export class CursoModule { }
