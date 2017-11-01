import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projetinho-rest',
  templateUrl: './projetinho-rest.component.html',
  styleUrls: ['./projetinho-rest.component.css']
})
export class ProjetinhoRestComponent implements OnInit {

  cursos: any = {
    curso: 'curso',
    duracao: '00hrs'
  }

  constructor() { }

  ngOnInit() {
  }

}
