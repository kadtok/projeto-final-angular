import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormPesquisaComponent } from './form-pesquisa.component';

describe('FormPesquisaComponent', () => {
  let component: FormPesquisaComponent;
  let fixture: ComponentFixture<FormPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
