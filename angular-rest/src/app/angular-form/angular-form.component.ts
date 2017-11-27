import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { OutletContext } from '@angular/router';
import {Message} from 'primeng/components/common/api';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-angular-form',
  templateUrl: './angular-form.component.html',
  styleUrls: ['./angular-form.component.css']
})
export class AngularFormComponent implements OnInit {

  curso = {};
  duracao: string = '';
  buscarNome: String;
  formulario: FormGroup;
  mensagem: Message[] = [];
  @Input('metodoListarCurso') metodoListarCurso: any = {};

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
        nome: [''],
        duracao: [''],
        'buscar': new FormControl('', Validators.required)
    });
  }

   
  metodoListar(): void {
    this.http.get('http://localhost:8080/').subscribe(data => {
      this.metodoListarCurso = data;

      this.formulario.reset();
    });
  }

  metodoBuscar(buscarNome: string): void{
    this.http.get('http://localhost:8080/' + buscarNome).subscribe(data => {
      this.metodoListarCurso = data;
    });
  }

  metodoDeleta(id) {
    this.http.delete('http://localhost:8080/' + id).subscribe(
      data => {
        this.metodoListarCurso = data;

        this.mensagem = [];
        this.mensagem.push({severity:'success', summary:'Deletado Com Sucesso'});
    });

  }

  metodoAlterar(id, nome, duracao) {
    if(this.formulario.value.nome == ''){
      this.curso = {
        id: id,
        nome: nome,
        duracao: this.formulario.value.duracao
      }
    }else if(this.formulario.value.duracao == ''){
      this.curso = {
        id: id,
        nome: this.formulario.value.nome,
        duracao: duracao
      }
    }else{
      this.curso = {
        id: id,
        nome: this.formulario.value.nome,
        duracao: this.formulario.value.duracao
      }
    }
        this.http.put('http://localhost:8080/', this.curso)
        .subscribe(data => {
            this.metodoListarCurso = data;

            this.mensagem = [];
            this.mensagem.push({severity:'success', summary:'Alterado Com Sucesso'});
        });
  }

  mensagemDom() {
    this.mensagem = [];
    this.mensagem.push({severity:'warn', summary:'Por favor Pesquise um Curso'});
  }

  metodoAdicionarCurso(adicionar){
    this.metodoListarCurso.push(adicionar);
 }

}
