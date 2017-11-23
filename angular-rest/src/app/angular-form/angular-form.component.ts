import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
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
  formulario: FormGroup;
  @Input('metodoListarCurso') metodoListarCurso: any = {};

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
        'nome': new FormControl('', Validators.required),
        'duracao': new FormControl('', Validators.required)
    });
  }

   
  metodoListar(): void {
    this.http.get('http://localhost:8080/').subscribe(data => {
      this.metodoListarCurso = data;          
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
    });

  }

  metodoAlterar(id, nomeIn, duracaoIn) {
    const curso = {
      id: id,
      nome: nomeIn,
      duracao: duracaoIn
  }
     if((id != undefined) && (nomeIn != '') && (duracaoIn != '')){
        this.http.put('http://localhost:8080/', curso)
        .subscribe(data => {
            this.metodoListarCurso = data;
            console.log(data);
        });
     }
  }

  metodoAdicionarCurso(adicionar){
    this.metodoListarCurso.push(adicionar);
 }

}
