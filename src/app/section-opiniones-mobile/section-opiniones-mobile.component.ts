import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HidePlayerService } from '../services/hide-player.service';

@Component({
  selector: 'app-section-opiniones-mobile',
  templateUrl: './section-opiniones-mobile.component.html',
  styleUrls: ['./section-opiniones-mobile.component.scss']
})
export class SectionOpinionesMobileComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter<any>();
  users:any;

  constructor(private hidePlayerService : HidePlayerService) {
    this.users = [{
      "username" : "user1",
      "comment" : "muy buena, me gusto!",
      "calification": 5
    },
    {
      "username" : "user2",
      "comment" : "muy buena, me gusto!",
      "calification": 4
    },
    {
      "username" : "user3",
      "comment" : "muy buena",
      "calification": 3
    },
    {
      "username" : "user4",
      "comment" : "no me gusto",
      "calification": 1
    },
    {
      "username" : "user5",
      "comment" : "muy buena, me gusto!",
      "calification": 3
    }
  ]
  }

  ngOnInit(): void {
  }

  close() {
    this.hidePlayerService.hide$.emit();
    this.onClose.emit();
  }

}
