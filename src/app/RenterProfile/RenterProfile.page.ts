import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { MessageRenterPage } from '../MessageRenter/MessageRenter.page';


declare var google: any;

@Component({
  selector: 'app-RenterProfile',
  templateUrl: './RenterProfile.page.html',
  styleUrls: ['./RenterProfile.page.scss'],
})
export class RenterProfilePage {

  constructor(
    private alertCtrl: AlertController,
    private modalController: ModalController
  ) {}



  async showAlert(){
    await this.alertCtrl.create({
      header: "Your request has been sent. Message the listing account for more details.",
      buttons: [
        {
          text: "Dismiss", handler: (res)=>{
            console.log()
          }
        }
      ]
    }).then(res => res.present());
  }
  
  async presentModal() {
    const modal = await this.modalController.create({
      component: MessageRenterPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }
  
  
}
