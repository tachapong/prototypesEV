import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-ev-home-refund',
  templateUrl: './ev-home-refund.page.html',
  styleUrls: ['./ev-home-refund.page.scss'],
})
export class EvHomeRefundPage implements OnInit {

  public slideOpts = {
    zoom: false,
    slidesPerView: 4,
    spaceBetween: 5,
    centeredSlides: false,
    autoplay: false,
    loop: false,
    freeMode: true
  };
  
  constructor(public alertController: AlertController) {
    this.presentAlert();
   }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'EV Charger',
      message: 'คืนเงินทอนจากบริการ EV Charger',
      buttons: ['ปิด']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }
  ngOnInit() {
  }

}
