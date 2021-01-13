import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SongListenerService {
  currentSong$ = new EventEmitter();

  constructor() { }
}
