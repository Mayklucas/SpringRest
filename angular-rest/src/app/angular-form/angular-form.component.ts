import { OutletContext } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {

  curso: string = '';
  duracao: string = '';
  buscarNome: String;
  @Input('metodoListarCurso') metodoListarCurso: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {}

   
  metodoListar(): void {
    this.http.get('http://localhost:8080/cursosListar').subscribe(data => {
      this.metodoListarCurso = data;          
    });
  }

  metodoBuscar(buscarNome: string): void{
    this.http.get('http://localhost:8080/buscarCursos/' + buscarNome).subscribe(data => {
      this.metodoListarCurso = data;
    });
  }

  metodoDeleta(id) {
    this.http.delete('http://localhost:8080/cursosDelete/' + id).subscribe(
      data => {
        this.metodoListarCurso = data;
    });

  }

  metodoAlterar(id, nome, duracao) {
    const curso = {
      id: id,
      nome: nome,
      duracao: duracao
  }
     if((id != undefined) && (nome != '') && (duracao != '')){
        this.http.put('http://localhost:8080/cursosAlterar/', curso)
        .subscribe(data => {
            this.metodoListarCurso = data;
        });
     }
  }

  metodoAdicionarCurso(adicionar){
    this.metodoListarCurso.push(adicionar);
 }

}
