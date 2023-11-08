import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aplicacion2Component } from './aplicacion2.component';

describe('Aplicacion2Component', () => {
  let component: Aplicacion2Component;
  let fixture: ComponentFixture<Aplicacion2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aplicacion2Component]
    });
    fixture = TestBed.createComponent(Aplicacion2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
