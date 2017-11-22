import { concat } from 'rxjs/operators';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-projeto-angular',
  templateUrl: './projeto-angular.component.html',
  styleUrls: ['./projeto-angular.component.css']
})
export class ProjetoAngularComponent implements OnInit {

  nome: string = '';
  duracao: string = '';
  @Output() metodoListarCurso = new EventEmitter;
  
  constructor(private http: HttpClient) { }

  ngOnInit() {}

  metodoAdicionar(nome: string, duracao: string): void {
    const curso = {
      nome: nome,
      duracao: duracao
    }
     if((nome != undefined) && (duracao != undefined)){
       this.http.post('http://localhost:8080/', curso)
        .subscribe(data => {
          this.metodoListarCurso.emit(curso);
        });
        
     }
  }

}
