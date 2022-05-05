import { Component, OnInit } from '@angular/core';
import { CursoService } from '../curso/curso.service';

@Component({
  selector: 'app-cadastro-curso',
  templateUrl: './cadastro-curso.component.html',
  styleUrls: ['./cadastro-curso.component.css'],
  providers:[CursoService] /* Deixa o serviço acessível somente para esse componente */
})
export class CadastroCursoComponent implements OnInit {
  cursos: string[]=[]
  
  constructor(private cursoService: CursoService) { }

  ngOnInit(): void {
    this.cursos= this.cursoService.getCursos()
  }
  onAddCurso(cursox:string){
    this.cursoService.addCurso(cursox)
  }
}
