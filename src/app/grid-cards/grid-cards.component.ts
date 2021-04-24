import { ChangeDetectorRef, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grid-cards',
  templateUrl: './grid-cards.component.html',
  styleUrls: ['./grid-cards.component.scss']
})
export class GridCardsComponent implements OnInit {
  
  @Input() cards: any;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  see(card) {
    this.router.navigate([card.link]);
  }

}