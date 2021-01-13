import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-write-comment',
  templateUrl: './write-comment.component.html',
  styleUrls: ['./write-comment.component.scss']
})
export class WriteCommentComponent implements OnInit {
  pathFillStar = "assets/icons/star-fill.svg";
  pathStar = "assets/icons/star.svg";
  @ViewChild('divStars') divStars: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  changeStar(e) {
    let calification = e.srcElement.getAttribute("name");
    this.fillStars(this.pathFillStar,calification)
  }

  fillStars(path,count) {
    let stars = this.divStars.nativeElement.children;
    for (let i = 0; i < stars.length; i++) {
      if (count > i) {
        stars[i].src = path;
      } else {
        stars[i].src = this.pathStar;
      }
    }
  }

}
