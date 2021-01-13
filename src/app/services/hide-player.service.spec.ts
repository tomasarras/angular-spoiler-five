import { TestBed } from '@angular/core/testing';

import { HidePlayerService } from './hide-player.service';

describe('HidePlayerService', () => {
  let service: HidePlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HidePlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
