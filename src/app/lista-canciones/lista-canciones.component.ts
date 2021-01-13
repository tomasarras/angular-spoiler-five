import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SongListenerService } from '../services/song-listener.service';

@Component({
  selector: 'app-lista-canciones',
  templateUrl: './lista-canciones.component.html',
  styleUrls: ['./lista-canciones.component.scss']
})
export class ListaCancionesComponent implements OnInit {
  lastSong: any;
  @Input()canciones: any;
  @Input() title: any;

  constructor(private songService : SongListenerService,private router: Router) {
  }

  playSong(song) {
    this.songService.currentSong$.emit(song);
  }

  mouseEnterSong(song) {
    song.srcElement.querySelector(".play-line-icon").src = "assets/icons/play.svg";
  }

  mouseLeaveSong(song) {
    song.srcElement.querySelector(".play-line-icon").src = "assets/icons/line.svg";
  }

  ngOnInit(): void {
    for (let i = 0; i < this.canciones.length; i++)
      this.canciones[i]["reproduciendo"] = false;
  }

  seeSong(song) {
    this.router.navigate([song.link]);
  }

}
