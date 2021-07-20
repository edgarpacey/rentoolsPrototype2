import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-RenterProfile',
  templateUrl: './RenterProfile.page.html',
  styleUrls: ['./RenterProfile.page.scss'],
})
export class RenterProfilePage {


  constructor(
    private alertCtrl: AlertController
  ) { }

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
}