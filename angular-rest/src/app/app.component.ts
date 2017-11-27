import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  metodoListarCurso: any = [];
  
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get('http://localhost:8080/').subscribe(data => {
      this.metodoListarCurso = data;          
    });
  }

  metodoAdicionarCurso(adicionar){
     this.metodoListarCurso.push(adicionar);
     return this.ngOnInit();
  } 
 
}
