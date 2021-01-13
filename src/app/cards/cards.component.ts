import { Component, Input, OnInit, ViewChild, ElementRef, ChangeDetectorRef, OnChanges  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  @Input() cards: any;
  @Input() artist: boolean;
  @Input() title: any;
  @ViewChild('divCards') divCards: ElementRef;
  scroll: number;
  last: boolean;
  first: boolean;
  scrollDisabled: boolean;

  constructor(private cdRef:ChangeDetectorRef,private router: Router) {
    this.scroll = 0;
    this.first = true;
    this.last = false;
  }

  ngOnInit(): void {
  }

  next(el: HTMLElement) {
    this.scrollElement(el,"next");
  }
  
  back(el: HTMLElement) {
    this.scrollElement(el,"back");
  }

  scrollElement(el:HTMLElement, direction:string) {
    let maxScroll = el.scrollWidth - el.clientWidth;

    if (direction == "next") {
      this.first = false;
      this.scroll = el.offsetWidth + this.scroll;
      if (this.scroll > maxScroll) {
        this.last = true;
      } else {
        this.last = false;
      }

    } else if (direction == "back") {
      this.last = false;
      this.scroll = this.scroll - el.offsetWidth;
      if (this.scroll <= 0) {
        this.scroll = 0;
        this.first = true;
      } else {
        this.first = false;
      }
    }

    el.scroll({
      left: this.scroll,
      top: 0,
      behavior: 'smooth'
    });

  }

  ngAfterViewChecked() {
    let maxScroll = this.divCards.nativeElement.scrollWidth - this.divCards.nativeElement.clientWidth;
    if (maxScroll == 0) {
      this.scrollDisabled = true;
    }
    this.cdRef.detectChanges();
  }

  see(card) {
    this.router.navigate([card.link]);
  }

}