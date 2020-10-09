import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiosEditComponent } from './radios-edit.component';

describe('RadiosEditComponent', () => {
  let component: RadiosEditComponent;
  let fixture: ComponentFixture<RadiosEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RadiosEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiosEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
