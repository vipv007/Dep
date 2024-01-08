import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private router: Router) {}

  goTosilkworms() {
    this.router.navigate(['/silkworms']);
  }
  
  goTomoult() {
    this.router.navigate(['/moult']);
  }
  goTolifecycle() {
    this.router.navigate(['/lifecycle']);
  }
  goToweather() {
    this.router.navigate(['/weather']);
  }
  goTodisinfection() {
    this.router.navigate(['/disinfection']);
  }
  goTofertilizer() {
    this.router.navigate(['/fertilizer']);
  }
}