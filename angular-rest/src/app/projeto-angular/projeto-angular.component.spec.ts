import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoAngularComponent } from './projeto-angular.component';

describe('ProjetoAngularComponent', () => {
  let component: ProjetoAngularComponent;
  let fixture: ComponentFixture<ProjetoAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
