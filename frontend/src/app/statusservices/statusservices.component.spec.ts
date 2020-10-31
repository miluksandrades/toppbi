import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusservicesComponent } from './statusservices.component';

describe('StatusservicesComponent', () => {
  let component: StatusservicesComponent;
  let fixture: ComponentFixture<StatusservicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatusservicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusservicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
