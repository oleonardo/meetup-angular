import { Component, ViewChild } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @ViewChild('sidenav') sidenav: any;

  constructor(
    private router: Router
  ) {}

  navigateTo(destination) { 
    this.router.navigate([destination]);
    this.sidenav.toggle();
  }
}
