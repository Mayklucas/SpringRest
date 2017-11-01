import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetinhoRestComponent } from './projetinho-rest.component';

describe('ProjetinhoRestComponent', () => {
  let component: ProjetinhoRestComponent;
  let fixture: ComponentFixture<ProjetinhoRestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetinhoRestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetinhoRestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
