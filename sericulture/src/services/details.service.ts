import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DetailsService {
  constructor(private alertController: AlertController) {}

  async showDetailsPopup() {
    const alert = await this.alertController.create({
      header: 'Farm Details',
      message: `
        Farm Name: Government Seed Farm<br>
        Location: Berigai<br>
        District: Krishnagiri<br>
        Address: P3 seed fam, Hosur main road, Berigai (Po)<br>
        Officer Name: S.SANTHI, JIS<br>
        Contact No: 8610295017<br>
      `,
      buttons: ['OK']
    });

    await alert.present();
  }
}
