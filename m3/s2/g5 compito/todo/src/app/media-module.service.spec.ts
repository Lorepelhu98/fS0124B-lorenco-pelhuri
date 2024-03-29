import { TestBed } from '@angular/core/testing';

import { MediaModuleService } from './media-module.service';

describe('MediaModuleService', () => {
  let service: MediaModuleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediaModuleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
