import { DOCUMENT } from '@angular/common';
import { AfterViewChecked, AfterViewInit, ChangeDetectorRef, Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,AfterViewChecked{
  title = 'Interfaces-FinalTP';
  bottomGap: number = 0;
  topGap: number = 0;
  @ViewChild('navbar', {read: ElementRef}) navBarView: ElementRef;
  @ViewChild('fixBody') element: ElementRef;
  sideNavToggler: boolean = false;

  constructor(private cd: ChangeDetectorRef,
              private router: Router,
              @Inject(DOCUMENT) private document: Document) {
    this.topGap = 0;
  }

  ngAfterViewChecked(): void {
    this.topGap = (<HTMLElement>this.navBarView.nativeElement).getBoundingClientRect().height
    let maxHeight = this.navBarView.nativeElement.parentElement.getBoundingClientRect().height;
    let body = this.document.body;
    body.style.height = maxHeight;
    this.cd.detectChanges();
  }

  ngOnInit(): void {
  }

  navigate(url) {
    this.router.navigate([url]);
  }
}
