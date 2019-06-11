import { TestBed } from '@angular/core/testing';

import { CivilService } from './civil.service';

describe('CivilService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CivilService = TestBed.get(CivilService);
    expect(service).toBeTruthy();
  });
});
