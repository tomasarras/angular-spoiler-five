import { Component, OnInit } from '@angular/core';
import playlistsJson from './mock/playlists.json';
import podcastsJson from './mock/podcasts.json';
import songsJson from './mock/songs.json';


@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  playlists:any = playlistsJson;
  podcasts:any = podcastsJson;
  songs:any = songsJson;
  titlePlaylist:any;
  titlePodcast:any;
  titleSongs:any;

  constructor() {
    this.titlePlaylist = {
      "title": "Playlists mas recientes",
      "clickable":false,
      "link": ""
    }

    this.titlePodcast = {
      "title": "Podcasts mas recientes",
      "clickable":false,
      "link": ""
    }

    this.titleSongs = {
      "title": "Canciones mas escuchadas",
      "clickable":false,
      "link": ""
    }
  }

  ngOnInit(): void {
  }

}
