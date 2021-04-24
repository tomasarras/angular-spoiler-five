import { Component, OnInit } from '@angular/core';
import playlistsJson from './mock/playlists.json';

@Component({
  selector: 'app-section-my-playlists',
  templateUrl: './section-my-playlists.component.html',
  styleUrls: ['./section-my-playlists.component.scss']
})
export class SectionMyPlaylistsComponent implements OnInit {
  playlists:any = playlistsJson;

  constructor() {
  }

  ngOnInit(): void {
  }

}
