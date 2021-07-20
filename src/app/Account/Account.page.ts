import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { InboxPage } from '../Inbox/Inbox.page';

@Component({
  selector: 'app-Account',
  templateUrl: './Account.page.html',
  styleUrls: ['./Account.page.scss']
})
export class AccountPage {
  constructor(private modalCtrl: ModalController) {}

  async openModal() {
    const modal = await this.modalCtrl.create({
      conponent: InboxPage
    });

    await modal.present();
  }
}
