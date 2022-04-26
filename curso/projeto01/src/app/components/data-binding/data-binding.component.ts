import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  url: any = 'http://loiane.training'
  urlImage: any = 'http://lorempixel.com.br/500/400/?1'
  cursoAngular: boolean = true
  valorAtual: string = ''
  valorSalvo: string = ''
  isMouse: boolean = false
  nome: string = "abc"
  pessoa: any = {
    nome:"",
    idade:0,
    endereco:{
      cidade:"",
      estado:""
    }
  }
  cursos: string[]

  getCurso(){
    return ['']
  }

  getValor(){
    return 1
  }
  getCurtirCurso(){
    return true
  }
  clique(){
    alert('clicou')
  }
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual=((<HTMLInputElement>evento.target).value)
  }
  salvarValor(valor: any){
    this.valorSalvo = valor
  }
  onMouseOverOut(){
    this.isMouse=!this.isMouse
  }

  constructor() {
    this.cursos=this.getCurso()
   }

  ngOnInit(): void {
  }

}
