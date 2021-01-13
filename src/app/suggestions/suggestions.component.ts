import { Component, OnInit } from '@angular/core';
import playlistsJson from './mock/playlists.json';
import podcastsJson from './mock/podcasts.json';
import songsJson from './mock/songs.json';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  playlists:any = playlistsJson;
  podcasts:any = podcastsJson;
  songs:any = songsJson;
  titlePlaylist:any;
  titlePodcast:any;
  titleSongs:any;

  constructor() {
    this.titlePlaylist = {
      "title": "Playlists sugeridas",
      "clickable":false,
      "link": ""
    }

    this.titlePodcast = {
      "title": "Podcasts sugeridos",
      "clickable":false,
      "link": ""
    }

    this.titleSongs = {
      "title": "Canciones sugeridas",
      "clickable":false,
      "link": ""
    }
  }

  ngOnInit(): void {
  }

}
