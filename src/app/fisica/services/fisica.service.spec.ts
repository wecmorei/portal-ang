import { TestBed } from '@angular/core/testing';

import { FisicaService } from './fisica.service';

describe('FisicaService', () => {
  let service: FisicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FisicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
