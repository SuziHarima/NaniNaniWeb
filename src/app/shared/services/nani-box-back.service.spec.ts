import { TestBed } from '@angular/core/testing';

import { NaniBoxBackService } from './nani-box-back.service';

describe('NaniBoxBackService', () => {
  let service: NaniBoxBackService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NaniBoxBackService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
