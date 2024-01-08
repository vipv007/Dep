import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manuring',
  templateUrl: './manuring.page.html',
  styleUrls: ['./manuring.page.scss'],
})
export class ManuringPage implements OnInit {

  apiLoaded = false;

  videoId = 'moIK9N1UYe0';
  videoIds = 'm2C9v--eDSc';
  height = 200;
  width = 400;

  startSeconds = 60;
  endSeconds = 120;

  ngOnInit() {
    if (!this.apiLoaded) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
      this.apiLoaded = true;
    }
  }
}


