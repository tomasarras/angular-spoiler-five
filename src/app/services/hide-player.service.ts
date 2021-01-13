import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HidePlayerService {
  hide$ = new EventEmitter();
  disabled:boolean;

  constructor() {
    this.disabled = false;
  }

  disable() {
    if (!this.disabled) {
      this.hide$.emit();
      this.disabled = true;
    }
  }

  active() {
    if (this.disabled) {
      this.hide$.emit();
      this.disabled = false;
    }
  }
}
