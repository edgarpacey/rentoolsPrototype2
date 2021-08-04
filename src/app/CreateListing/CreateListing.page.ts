import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-CreateListing',
  templateUrl: './CreateListing.page.html',
  styleUrls: ['./CreateListing.page.scss'],
})
export class CreateListingPage {

  constructor(
    private alertCtrl: AlertController
  ) { }

  async showAlert(){
    await this.alertCtrl.create({
      header: "Your listing has been published. You can view your listings in your account tab.",
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

