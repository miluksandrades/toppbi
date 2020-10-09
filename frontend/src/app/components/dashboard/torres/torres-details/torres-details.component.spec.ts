import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorresDetailsComponent } from './torres-details.component';

describe('TorresDetailsComponent', () => {
  let component: TorresDetailsComponent;
  let fixture: ComponentFixture<TorresDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorresDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
