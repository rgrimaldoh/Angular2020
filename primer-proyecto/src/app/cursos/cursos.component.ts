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

  constructor(private cursosService: CursosService) {
    this.nombrePortal = 'http://google.com';

    this.arreglo = this.cursosService.getCursos();

   }
    

  ngOnInit(): void {
  }

}
