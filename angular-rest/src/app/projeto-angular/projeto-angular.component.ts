import { concat } from 'rxjs/operators';
import {Message} from 'primeng/components/common/api';
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
  limparInput: FormGroup;
  mensagem: Message[] = [];
  @Output() metodoListarCurso = new EventEmitter;
  
  constructor(private http: HttpClient, private cursos: FormBuilder) { }

  ngOnInit() {
    this.limparInput = this.cursos.group({
        'nome': new FormControl('', Validators.required),
        'duracao': new FormControl('', Validators.required)
    });
  }

  metodoAdicionar(nome: string, duracao: string): void {
    const curso = {
      nome: nome,
      duracao: duracao
    }
     if((nome != undefined) && (duracao != undefined)){
       this.http.post('http://localhost:8080/', curso)
        .subscribe(data => {
          this.metodoListarCurso.emit(curso);

          this.mensagem = [];
          this.mensagem.push({severity:'success', summary:'Cadastrado Com Sucesso'});
        });  
       
     }
  }

  metodoLimpar() {
    this.limparInput.reset();
  }

  mensagemUp() {
    this.mensagem = [];
    this.mensagem.push({severity:'warn', summary:'Por favor Cadastre um Curso'});
  }

}
