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

  getValor(){
    return 1
  }
  getCurtirCurso(){
    return true
  }

  constructor() { }

  ngOnInit(): void {
  }

}
