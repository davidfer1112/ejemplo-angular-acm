import { TestBed } from '@angular/core/testing';

import { PurebaServiceService } from './pureba-service.service';

describe('PurebaServiceService', () => {
  let service: PurebaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PurebaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
