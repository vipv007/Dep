import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mulberryseedling',
  templateUrl: './mulberryseedling.page.html',
  styleUrls: ['./mulberryseedling.page.scss'],
})
export class MulberryseedlingPage implements OnInit {

  data: any[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com' },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com' },
    // Add more data as needed
  ];

  constructor() {
    // You can perform additional initialization in the constructor if needed
  }

  ngOnInit() {
    // You can perform additional initialization in the ngOnInit method if needed
  }
}
