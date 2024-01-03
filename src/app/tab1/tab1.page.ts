import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
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
  goTomanuring() {
    this.router.navigate(['/manuring']);
  }
  goTomulberrysaplings() {
    this.router.navigate(['/mulberry-saplings']);
  }
 
}