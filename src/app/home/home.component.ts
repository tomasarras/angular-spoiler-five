import { Component, OnInit } from '@angular/core';
import playlistsJson from './mock/playlists.json';
import podcastsJson from './mock/podcasts.json';
import songsJson from './mock/songs.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  playlists:any = playlistsJson;
  podcasts:any = podcastsJson;
  songs:any = songsJson;
  titlePlaylist:any;
  titlePodcast:any;
  titleSongs:any;

  constructor() {
    this.titlePlaylist = {
      "title": "Tus playlists",
      "clickable":true,
      "link": ""
    }

    this.titlePodcast = {
      "title": "Tus podcasts",
      "clickable":true,
      "link": ""
    }

    this.titleSongs = {
      "title": "Tus canciones",
      "clickable":true,
      "link": ""
    }
  }

  ngOnInit(): void {
  }

}
