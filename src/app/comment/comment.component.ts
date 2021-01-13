import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.scss']
})
export class CommentComponent implements OnInit {
  @Input() username: string;
  @Input() comment: string;
  @Input() calification: number;

  constructor() { }

  ngOnInit(): void {
  }

  counter(i: number) {
    return new Array(i);
  }

  compare(i:number) {
    return i < this.calification;
  }
}
