import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css'],
   providers:[CursoService] /*Deixa o serviço acessível somente para esse componente */
})
export class CursoComponent {
  cursos: string[]

  constructor(private cursoService: CursoService) { 
    this.cursos= this.cursoService.getCursos()

    CursoService.criouNovoCurso.subscribe(
      curso=> this.cursos.push(curso)
    ) //processo de inscriver(subscribe) alerta para alteração do evento
  }
}
