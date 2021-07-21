import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-NearByListings',
  templateUrl: './NearByListings.page.html',
  styleUrls: ['./NearByListings.page.scss'],
})
export class NearByListingsPage  {

  constructor(private modalController: ModalController) { }


  async dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  

}
