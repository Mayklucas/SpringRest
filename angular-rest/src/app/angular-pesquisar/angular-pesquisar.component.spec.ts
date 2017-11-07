import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularPesquisarComponent } from './angular-pesquisar.component';

describe('AngularPesquisarComponent', () => {
  let component: AngularPesquisarComponent;
  let fixture: ComponentFixture<AngularPesquisarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularPesquisarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularPesquisarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
