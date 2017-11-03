import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-angular',
  templateUrl: './projeto-angular.component.html',
  styleUrls: ['./projeto-angular.component.css']
})
export class ProjetoAngularComponent implements OnInit {

  id: number;
  curso: string = '';
  duracao: string = '';
  listarCursos: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/cursosListar').subscribe(data => {
      this.listarCursos = data;
          
    });
  }

  metodoCadastra(): void {
    this.http.get('http://localhost:8080/cursosAdicionar/' + this.curso + '/' + this.duracao)
    .subscribe(data => {
        this.listarCursos = data;
 
    });
  }

  metodoDeleta() {
    this.http.get('http://localhost:8080/cursosDelete/' + this.id ).subscribe(data => {
      this.listarCursos = data;
    });

  }

  metodoAlterar() {
    this.http.get('http://localhost:8080/cursosAlterar/' + this.curso + '/' + this.duracao)
      .subscribe(data => {
          
      });
  }

}
