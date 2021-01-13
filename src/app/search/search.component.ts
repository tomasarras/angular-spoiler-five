import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import searchs from './mock/search.json';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  search: string;
  playlists: any;
  artists: any;
  titlePlaylist:any;
  titleArtist:any;
  private sub: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titlePlaylist = {
      "title": "Playlists",
      "clickable":false,
      "link": ""
    }

    this.titleArtist = {
      "title": "Artistas",
      "clickable":false,
      "link": ""
    }

    this.sub = this.route.params.subscribe(params => {
      this.search = params['search'];
      for (let i = 0; i < searchs.length; i++) {
        if (searchs[i].search == this.search) {
          this.playlists = searchs[i].playlists;
          this.artists = searchs[i].artists;
        }
      }
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
