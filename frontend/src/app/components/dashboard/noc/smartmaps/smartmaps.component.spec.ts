import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartmapsComponent } from './smartmaps.component';

describe('SmartmapsComponent', () => {
  let component: SmartmapsComponent;
  let fixture: ComponentFixture<SmartmapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartmapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartmapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
