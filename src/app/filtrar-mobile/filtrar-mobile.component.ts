import { Component, OnInit, Input, EventEmitter, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-filtrar-mobile',
  templateUrl: './filtrar-mobile.component.html',
  styleUrls: ['./filtrar-mobile.component.scss'],
  animations: []
})
export class FiltrarMobileComponent implements OnInit {
  active:boolean;

  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }

  openFilter(event) {
    let element = event.srcElement.parentElement;
    let elementClicked = element.nodeName;
    while (elementClicked != "LI") {
      element = element.parentElement;
      elementClicked = element.nodeName;
    }
    let divContent = element.querySelector(".content");
    let arrowOpen = element.querySelector(".open-arrow");
    arrowOpen.classList.toggle("rotate");
    divContent.classList.toggle("open")
  }

  close() {
    this.onClose.emit()
  }
}
