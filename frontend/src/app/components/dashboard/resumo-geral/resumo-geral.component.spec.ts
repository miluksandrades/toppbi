import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoGeralComponent } from './resumo-geral.component';

describe('ResumoGeralComponent', () => {
  let component: ResumoGeralComponent;
  let fixture: ComponentFixture<ResumoGeralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResumoGeralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResumoGeralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
