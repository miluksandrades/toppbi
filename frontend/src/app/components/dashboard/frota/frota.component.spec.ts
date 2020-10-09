import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrotaComponent } from './frota.component';

describe('FrotaComponent', () => {
  let component: FrotaComponent;
  let fixture: ComponentFixture<FrotaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrotaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrotaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
