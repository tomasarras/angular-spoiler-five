import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HidePlayerService } from '../services/hide-player.service';

@Component({
  selector: 'app-section-calificar',
  templateUrl: './section-calificar.component.html',
  styleUrls: ['./section-calificar.component.scss']
})
export class SectionCalificarComponent implements OnInit {
  users: any;

  constructor() { 
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

}
