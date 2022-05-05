import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from '../../shared/log.service' //injetado outro serviço

@Injectable({
  providedIn: null
})
export class CursoService {

  emitirCursoCriado = new EventEmitter<string>()

  /* A palavra static faz com que seja acessível a qualquer componente, mesmo que não seja filho
  Dessa maneira tambem não é necessário fazer o serviço de injeção de dependencias nos componentes */
  static criouNovoCurso = new EventEmitter<string>()

  private cursos: string[]=['Java','Angular','JavaScript','ReactJs']

  constructor(private logService: LogService) { 
    console.log('cursoService')
  }

  getCursos(){
    this.logService.consolelog('Obtendo lista de cursos...')
    return this.cursos
  }
  addCurso(curso:string){
    this.logService.consolelog(`Criando um novo curso: ${curso}`)
    this.cursos.push(curso)
    this.emitirCursoCriado.emit(curso)
    
    //Processo para a acessar o evento CriouNovoCurso que esta static. não precisa do "this"
    CursoService.criouNovoCurso.emit(curso)
  }
}