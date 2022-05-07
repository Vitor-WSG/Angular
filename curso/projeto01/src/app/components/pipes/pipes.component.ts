import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  livro: any ={
    titulo:'Estruturas de Dados e Algoritmos com JavaScript',
    estrelas:4.9856,
    numeropaginas:408,
    preco:66.50,
    datalancamento:new Date (2019,5,23),
    url:'https://www.amazon.com.br/ref=nav_logo'
  }

  valorAsync = new Promise ((resolve,reject)=>{
    setTimeout(()=>resolve('Valor assincrono'),2000)
  })

 /*  valorAsync2 = Observable.interval(2000)
  .map(valor=>'Valor Assincrono2')
 */
  constructor() { }

  ngOnInit(): void {
  }

 

}
