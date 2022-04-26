import { Component, OnInit } from '@angular/core';
import { CursoService } from './curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {
  nomePortal: string;
  cursos: string[]

  constructor(private cursoService: CursoService) { 
    this.nomePortal = 'http://loiane.training'
    
    this.cursos= this.cursoService.getCursos()

  }

  ngOnInit(): void {
  }

}
