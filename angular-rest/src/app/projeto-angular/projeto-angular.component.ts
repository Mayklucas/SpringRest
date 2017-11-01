import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projeto-angular',
  templateUrl: './projeto-angular.component.html',
  styleUrls: ['./projeto-angular.component.css']
})
export class ProjetoAngularComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('http://localhost:8080').subscribe(data => {
      console.log()
    })
  }

}
