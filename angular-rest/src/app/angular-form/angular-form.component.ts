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
  @Input('metodoListarCurso') metodoListarCurso: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit() {}

  metodoDeleta(id) {
    this.http.delete('http://localhost:8080/cursosDelete/' + id).subscribe(
      data => {
        this.metodoListarCurso = data;
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
            this.metodoListarCurso = data;
        });
     }
  }

}
