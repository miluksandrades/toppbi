import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorresComponent } from './torres.component';

describe('TorresComponent', () => {
  let component: TorresComponent;
  let fixture: ComponentFixture<TorresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
