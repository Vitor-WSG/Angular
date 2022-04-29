import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
 valor: number = 0
 incrementaValor(){
   this.valor++
 }
 decrementaValor(){
   this.valor--
 }


 //ViewChild
 @ViewChild('campoInput') campoValorInput:any = ElementRef
 incrementaValor2(){
  this.campoValorInput.nativeElement.value++
}
decrementaValor2(){
  this.campoValorInput.nativeElement.value--
}


  constructor() { }

  ngOnInit(): void {
  }

}
