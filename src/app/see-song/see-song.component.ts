import { ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HidePlayerService } from '../services/hide-player.service';
import { SongListenerService } from '../services/song-listener.service';
import songs from './mock/songs.json';

@Component({
  selector: 'app-see-song',
  templateUrl: './see-song.component.html',
  styleUrls: ['./see-song.component.scss']
})
export class SeeSongComponent implements OnInit, OnDestroy {
  @ViewChild('divStars') divStars: ElementRef;
  @ViewChild('progressSong') progressSong: ElementRef;
  @ViewChild('options') options: ElementRef;
  id: string;
  songs: any;
  song: any;
  favorite:boolean;
  volumeBar:boolean;
  play:boolean;
  calificar:boolean;
  interval:any;
  first = false;
  pathFilledStar = "assets/icons/star-filled.svg";
  pathFillStar = "assets/icons/star-fill.svg";
  pathStar = "assets/icons/star.svg";
  mobile: boolean;

  private sub: any;

  constructor(private route: ActivatedRoute,
    private cdRef:ChangeDetectorRef,
    private hidePlayerService : HidePlayerService,
    private router: Router,
    private songService : SongListenerService ) {
    this.play = true;
  }
  
  ngOnInit(): void {
    let mobileResolution = 700;
    let currentResolution = screen.width;

    if (currentResolution < mobileResolution) {
      this.mobile = true;
    } else {
      this.mobile = false;
    }

    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      for (let i = 0; i < songs.length; i++) {
        let idSong = songs[i]["link"].substring(5)
        if (idSong == this.id) {
          this.song = songs[i];
          this.song.currentDuration = "0:00";
        }
      }

    });
  }

  ngOnDestroy() {
    if (this.mobile)
      this.hidePlayerService.active();
  }

  ngAfterViewChecked() {
    if (!this.first) {
      this.fillStars(this.pathFilledStar,this.song.calificacion);

      let resizeHandler = ()=> {
        let mobileResolution = 700;
        let currentResolution = screen.width;

        if (currentResolution < mobileResolution) {
          this.mobile = true;
        } else {
          this.mobile = false;
        }

        if (this.mobile) {
          this.hidePlayerService.disable();
        } else {
          this.hidePlayerService.active();
        }

      }

      window.onresize = resizeHandler;

      if (this.mobile) {
        this.hidePlayerService.disable();
      }

    }
    
    this.first = true;
  }


  fillStars(path,count) {
    try {
      let stars = this.divStars.nativeElement.children;
      for (let i = 0; i < stars.length; i++) {
        if (count > i) {
          stars[i].src = path;
        } else {
          stars[i].src = this.pathStar;
        }
      }
    } catch {}
  }

  changeStar(e) {
    let calification = e.srcElement.getAttribute("name");
    this.fillStars(this.pathFillStar,calification)
  }

  playPause() {
    this.songService.currentSong$.emit(this.song);
    this.play = !this.play;
      if (!this.play) {
        this.interval = setInterval(()=> {
          let seconds = this.song.currentDuration.substring(2,4);
          let mins = this.song.currentDuration.substring(0,1);
          seconds++;
  
          if (seconds == 60) {
            mins++;
            seconds = 0;
          }
  
          seconds = ('0' + seconds.toString()).slice(-2)
  
          this.song.currentDuration = mins + ":" +seconds;
          this.calcPlayerBar()
          if (this.song.currentDuration == this.song.duracion) {
            this.onFinishSong();
          }
        } ,1000);
      } else {
        clearInterval(this.interval);
      }
  }

  calcPlayerBar() {
    let currentSeconds = parseInt(this.song.currentDuration.substring(2,4));
    let currentMin = parseInt(this.song.currentDuration.substring(0,1));
    let totalSeconds = parseInt(this.song.duracion.substring(2,4));
    let totalMin = parseInt(this.song.duracion.substring(0,1));

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

  onFinishSong() {

  }

  showOptions() {
    this.options.nativeElement.classList.toggle("active");
  }

  showCalificar() {
    this.showOptions();
    this.calificar = true;
    this.hidePlayerService.active();
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
    this.favorite = !this.favorite;
  }

  goToHome() {
    this.router.navigate([""]);
  }

}
