import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aplicacion1Component } from './aplicacion1.component';

describe('Aplicacion1Component', () => {
  let component: Aplicacion1Component;
  let fixture: ComponentFixture<Aplicacion1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Aplicacion1Component]
    });
    fixture = TestBed.createComponent(Aplicacion1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
