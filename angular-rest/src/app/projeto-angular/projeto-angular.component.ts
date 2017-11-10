import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projeto-angular',
  templateUrl: './projeto-angular.component.html',
  styleUrls: ['./projeto-angular.component.css']
})
export class ProjetoAngularComponent implements OnInit {

  curso: string = '';
  duracao: string = '';
  @Output() metodoListarCurso = new EventEmitter;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {}

  metodoAdicionar(): void {
     const curso = {
       nome: this.curso,
       duracao: this.duracao
     };
     if((this.curso != undefined) && (this.duracao != undefined)){
       this.http.post('http://localhost:8080/cursosAdicionar/', curso)
        .subscribe(data => {
          this.metodoListarCurso.emit(curso);
        });
        this.curso = '';
        this.duracao = '';
     }
  }

}
