import { TestBed } from '@angular/core/testing';

import { FrotasService } from './frotas.service';

describe('FrotasService', () => {
  let service: FrotasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FrotasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
