import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-MessageRenter',
  templateUrl: './MessageRenter.page.html',
  styleUrls: ['./MessageRenter.page.scss'],
})
export class MessageRenterPage{


  constructor(private modalController: ModalController) { }
  async dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}

