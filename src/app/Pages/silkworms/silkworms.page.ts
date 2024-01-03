import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-silkworms',
  templateUrl: './silkworms.page.html',
  styleUrls: ['./silkworms.page.scss'],
})
export class SilkwormsPage {

  constructor(private router: Router) {}

  goTomulberry() {
    this.router.navigate(['/mulberry']);
  }
  
  goTodiseases() {
    this.router.navigate(['/diseases']);
  }
  goTomulberryseedling() {
    this.router.navigate(['/mulberryseedling']);
  }
  goToirrigation() {
    this.router.navigate(['/irrigation']);
  }
  goToharvesting() {
    this.router.navigate(['/harvesting']);
  }
}