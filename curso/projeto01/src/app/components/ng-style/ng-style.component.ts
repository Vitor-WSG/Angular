import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent implements OnInit {
  contato: boolean=false
  ativo: boolean=false
  tamanhoFonte: number=10

  constructor() { }

  ngOnInit(): void {
  }
zoonIn(){
  this.tamanhoFonte++
}
zoonOut(){
  this.tamanhoFonte--
}
changeStyle(){
  this.ativo=!this.ativo
}
}
