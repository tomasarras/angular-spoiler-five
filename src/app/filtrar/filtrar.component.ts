import { Component, OnInit,EventEmitter } from '@angular/core';
import { MatOption } from '@angular/material/core';
import { FormControl } from '@angular/forms';
import {
  fadeInOnEnterAnimation,
  fadeOutOnLeaveAnimation,
  slideInDownAnimation,
  slideInDownOnEnterAnimation, slideInLeftOnEnterAnimation,
  slideOutDownOnLeaveAnimation, slideOutLeftOnLeaveAnimation, slideOutUpOnLeaveAnimation
} from 'angular-animations';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-filtrar',
  templateUrl: './filtrar.component.html',
  styleUrls: ['./filtrar.component.scss'],
  animations: [slideInDownOnEnterAnimation(), slideOutUpOnLeaveAnimation({duration: 500}), trigger('slideOut',[
    transition(':leave', [
      animate('200ms ease-in', style({ opacity: '0' }))
    ])
  ])]
})
export class FiltrarComponent implements OnInit {
  show: boolean = false;
  mobile:boolean;
  genres: any[] = ['Pop', 'Metal', 'Electro', 'Rock', 'Rock Nacional'];
  toppings: FormControl;

  constructor() { }

  ngOnInit(): void {
    this.toppings = new FormControl()
    let mobileResolution = 700;
    let currentResolution = screen.width;

    if (currentResolution < mobileResolution)
      this.mobile = true;
    else
      this.mobile = false;
  }

  showFilters() {
    this.show = !this.show;
  }

}
