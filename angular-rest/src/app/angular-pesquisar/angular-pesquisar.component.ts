import { EventEmitter } from 'events';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-angular-pesquisar',
  templateUrl: './angular-pesquisar.component.html',
  styleUrls: ['./angular-pesquisar.component.css']
})
export class AngularPesquisarComponent implements OnInit {

  listarCursos: any = [];
  buscarNome: String;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  metodoBuscar(): void{
    this.http.get('http://localhost:8080/buscarCursos/' + this.buscarNome).subscribe(data => {
      this.listarCursos = data;
    });
  }

}
