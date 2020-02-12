import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.scss']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://google.com';
  urlImagen: string = 'https://webcomicms.net/sites/default/files/clipart/165119/signs-and-symbols-165119-1315937.gif'; 


  getValor(){
    return 1+3;
  }

  cursoAngular: boolean = true;

  getGustoCurso(){
    return true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
