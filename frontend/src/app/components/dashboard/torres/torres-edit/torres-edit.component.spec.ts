import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TorresEditComponent } from './torres-edit.component';

describe('TorresEditComponent', () => {
  let component: TorresEditComponent;
  let fixture: ComponentFixture<TorresEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TorresEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TorresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
