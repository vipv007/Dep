import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.page.html',
  styleUrls: ['./diseases.page.scss'],
  
})
export class DiseasesPage {
  slidesOptions = {
    slidesPerView: 1.5
  };

  constructor(private router: Router) {}
  goToleafspot() {
    this.router.navigate(['/leafspot']);
  };
  goTopowderymildew() {
    this.router.navigate(['/powderymildew']);
  }
  goToleafrust() {
    this.router.navigate(['/leafrust']);
  }
 
}
