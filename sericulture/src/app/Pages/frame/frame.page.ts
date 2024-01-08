import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.page.html',
  styleUrls: ['./frame.page.scss'],
})
export class FramePage  {

 // Note: Make sure to import SafeResourceUrl and DomSanitizer from '@angular/platform-browser'

 iframeUrl: SafeResourceUrl;

 constructor(private sanitizer: DomSanitizer) {
   // Sanitize the URL to make it safe
   this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://silkworm-cocoon.blogspot.com/p/silk-rate_22.html');
   //this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://tnsericulture.tn.gov.in/successstory.html');
   //this.iframeUrl = this.sanitizer.bypassSecurityTrustResourceUrl('https://dailypricelist.com/cocoon-price-list.php');
   
 }
}