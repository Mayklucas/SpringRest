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
  camposLimpos = '';
  @Output() metodoListarCurso = new EventEmitter;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {}

  metodoAdicionar(nome: string, duracao: string): void {
     const curso = {
       nome: nome,
       duracao: duracao
     };
     if((nome != undefined) && (duracao != undefined)){
       this.http.post('http://localhost:8080/', curso)
        .subscribe(data => {
          this.metodoListarCurso.emit(curso);
        });
     }
  }

  metodoLimpar(): void{
      this.curso = this.camposLimpos;
      this.duracao = this.camposLimpos;
  }
}
