/*import { Component } from '@angular/core';
import { DetailsService } from '../../../services/details.service';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage  {
  constructor(private detailsService: DetailsService) {}

  showDetailsPopup() {
    this.detailsService.showDetailsPopup();
  }
}*/

import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.page.html',
  styleUrls: ['./popup.page.scss'],
})
export class PopupPage {
  farms: any[] = [
    {
      farmName: 'Government Seed Farm',
      location: 'Berigai',
      district: 'Krishnagiri',
      address: 'P3 seed farm, Hosur main road, Berigai (Po)',
      officerName: 'S.SANTHI, JIS',
      contactNo: '8610295017',
    },
    // Add more farm details as needed...
  ];

  constructor(private alertController: AlertController) {}

  async showFarmDetails(farm: any) {
    const alert = await this.alertController.create({
      header: 'Farm Details',
      message: `
        <strong>Farm Name:</strong> ${farm.farmName}<br>
        <strong>Location:</strong> ${farm.location}<br>
        <strong>District:</strong> ${farm.district}<br>
        <strong>Address:</strong> ${farm.address}<br>
        <strong>Officer Name:</strong> ${farm.officerName}<br>
        <strong>Contact No:</strong> ${farm.contactNo}<br>
      `,
      buttons: ['OK']
    });

    await alert.present();
  }
}


