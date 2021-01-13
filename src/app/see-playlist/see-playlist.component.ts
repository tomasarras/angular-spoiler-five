import { Component, ElementRef, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import playlists from './mock/playlists.json';

@Component({
  selector: 'app-see-playlist',
  templateUrl: './see-playlist.component.html',
  styleUrls: ['./see-playlist.component.scss']
})
export class SeePlaylistComponent implements OnInit {
  id: string;
  playlists: any;
  playlist: any;
  favorite:boolean;
  titleSongs:any;
  private sub: any;

  constructor(private route: ActivatedRoute) {
    this.titleSongs = {
      "title": "Canciones",
      "clickable":false,
      "link": ""
    }
  }

  ngOnInit(): void {
    this.favorite = false;

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      for (let i = 0; i < playlists.length; i++) {
        if (playlists[i].id == this.id) {
          this.playlist = playlists[i];
        }
      }
    });
  }

  starAnimation(event) {
    let scrStar = "assets/icons/star.svg";
    let scrStarFill = "assets/icons/star-fill.svg";
    let star = event.srcElement;
    try {
      while (star.nodeName == 'IMG') {
        if (star.src.includes(scrStarFill)) {
          star.src = scrStar;
        } else {
          star.src = scrStarFill;
        }
        star = star.previousElementSibling;
      }
    } catch {}
  }

  toggle(div:HTMLElement) {
    div.classList.toggle("active");
  }

  fav() {
    console.log(this.favorite)
    this.favorite = !this.favorite;
  }
  options(div:HTMLElement) {
    div.classList.toggle("active");
  }

  counter(i: number) {
    return new Array(i);
  }

  compare(i:number) {
    return i < this.playlist.calification;
  }
}
