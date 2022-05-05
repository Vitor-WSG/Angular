import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursoService} from '../curso/curso.service'
import { CadastroCursoComponent } from './cadastro-curso.component';
import { ReceberCursoCriadoComponent } from '../receber-curso-criado/receber-curso-criado.component'



@NgModule({
  declarations: [
    CadastroCursoComponent,
    ReceberCursoCriadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [CadastroCursoComponent],
  providers:[
    //CursoService
  ]
})
export class CadastroCursoModule { }
