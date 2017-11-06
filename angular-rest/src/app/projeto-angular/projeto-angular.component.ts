import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-angular',
  templateUrl: './projeto-angular.component.html',
  styleUrls: ['./projeto-angular.component.css']
})
export class ProjetoAngularComponent implements OnInit {

  curso: string = '';
  duracao: string = '';
  listarCursos: any = [];
  
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080/cursosListar').subscribe(data => {
      this.listarCursos = data;
          
    });
  }

  metodoAdicionar(): void {
     const curso = {
       nome: this.curso,
       duracao: this.duracao
     };
     if((this.curso != undefined) && (this.duracao != undefined)){
       this.http.post('http://localhost:8080/cursosAdicionar/', curso)
        .subscribe(data => {
          this.listarCursos = data;
        });
        this.curso = '';
        this.duracao = '';
     }
  }

  metodoDeleta(id) {
    this.http.delete('http://localhost:8080/cursosDelete/' + id).subscribe(
      data => {
        this.listarCursos = data;
    });

  }

  metodoAlterar(id, nomeIn, duracaoIn) {
    const curso = {
      id: id,
      nome: nomeIn,
      duracao: duracaoIn
  }
     if((id != undefined) && (nomeIn != '') && (duracaoIn != '')){
        this.http.put('http://localhost:8080/cursosAlterar/', curso)
        .subscribe(data => {
            this.listarCursos = data;
        });
     }
  }

}
