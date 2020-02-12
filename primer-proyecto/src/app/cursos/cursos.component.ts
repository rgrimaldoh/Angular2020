import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  nombrePortal: string;
  arreglo: string[];

  constructor() {
    this.nombrePortal = 'http://google.com';

    /*for(let i=0; i < this.arreglo.length; i++)
    {
      let curso = this.arreglo[i];
    }*/
    var servicio = new CursosService();


   }
    

  ngOnInit(): void {
  }

}
