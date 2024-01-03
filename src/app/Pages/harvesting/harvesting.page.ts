import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-harvesting',
  templateUrl: './harvesting.page.html',
  styleUrls: ['./harvesting.page.scss'],
})
export class HarvestingPage implements OnInit {
  selectTabs = 'recent';
  constructor() { }

  ngOnInit() {
  }

}
