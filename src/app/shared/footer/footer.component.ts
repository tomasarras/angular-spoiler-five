import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HidePlayerService } from 'src/app/services/hide-player.service';
import { SongListenerService } from 'src/app/services/song-listener.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @ViewChild('progressSong') progressSong: ElementRef;
  volumeBar:boolean;
  califications: boolean;
  play:boolean;
  fav:boolean;
  currentSong:any;
  interval:any;
  hide:boolean;

  constructor(private songService : SongListenerService,private hideService : HidePlayerService,private router: Router) {
    this.volumeBar = false;
    this.califications = false;
    this.play = true;
    this.fav = !this.fav;
    this.currentSong = {
      "name" : "",
      "img" : "",
      "duration":"3:50",
      "currentDuration":"0:00"
    }
  }

  ngOnInit(): void {
    this.songService.currentSong$.subscribe(song => {
      this.currentSong.img = song.img;
      this.currentSong.name = song.nombre;
      this.currentSong.duration = song.duracion;
      this.currentSong.currentDuration = "0:00";
      this.currentSong.link = song.link;
    });

    this.hideService.hide$.subscribe(r => {
      this.hide = !this.hide;
    });
  }

  openVolume(){
    this.volumeBar = !this.volumeBar;
  }

  openCalification() {
    this.califications = !this.califications;
  }

  playPause() {
    if (this.currentSong.name != "") {
      this.play = !this.play;
      if (!this.play) {
        this.interval = setInterval(()=> {
          let seconds = this.currentSong.currentDuration.substring(2,4);
          let mins = this.currentSong.currentDuration.substring(0,1);
          seconds++;
  
          if (seconds == 60) {
            mins++;
            seconds = 0;
          }
  
          seconds = ('0' + seconds.toString()).slice(-2)
  
          this.currentSong.currentDuration = mins + ":" +seconds;
          this.calcPlayerBar()
          if (this.currentSong.currentDuration == this.currentSong.duration) {
            this.onFinishSong();
          }
        } ,1000);
      } else {
        clearInterval(this.interval);
      }
    }
  }

  favorite() {
    this.fav = !this.fav;
  }

  onFinishSong() {
    clearInterval(this.interval);
  }

  calcPlayerBar() {
    let currentSeconds = parseInt(this.currentSong.currentDuration.substring(2,4));
    let currentMin = parseInt(this.currentSong.currentDuration.substring(0,1));
    let totalSeconds = parseInt(this.currentSong.duration.substring(2,4));
    let totalMin = parseInt(this.currentSong.duration.substring(0,1));

    let barPercent = 0;
    if (currentSeconds != 0) {
      currentSeconds = currentSeconds + (currentMin * 60);
    } else {
      currentSeconds = currentMin * 60;
    }
    
    totalSeconds = totalSeconds + (totalMin * 60);

    barPercent = (currentSeconds / totalSeconds) * 100;

    this.progressSong.nativeElement.style.left = barPercent + "%";
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

  openSong() {
    console.log(this.currentSong)
    this.router.navigate([this.currentSong.link]);
  }
}
