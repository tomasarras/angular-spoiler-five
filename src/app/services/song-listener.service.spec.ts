import { TestBed } from '@angular/core/testing';

import { SongListenerService } from './song-listener.service';

describe('SongListenerService', () => {
  let service: SongListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SongListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
