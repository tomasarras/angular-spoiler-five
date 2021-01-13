import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  options: string[] = ['Khea', 'Metallica', 'Megadeth', 'Bad bunny'];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  search(value:string) {
    this.router.navigate(["search/"+value.toLowerCase().replace(" ","-")])
  }

  goHome() {
    this.router.navigate(["/"])
  }
}
