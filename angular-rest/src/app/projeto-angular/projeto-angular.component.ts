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

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/cursosListar').subscribe(data => {
      console.log(data);
          
    });
  }

  metodoCadastra(): void {
    this.http.get('http://localhost:8080/cursosAdicionar/' + this.curso + '/' + this.duracao)
    .subscribe(data => {
        console.log(data);
 
    });
  }

  metodoListar(): void {

  }

  metodoDeleta() {

  }

  metodoAlterar() {

  }

}
