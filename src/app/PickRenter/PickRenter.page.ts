import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessageRenterPage } from '../MessageRenter/MessageRenter.page';


@Component({
  selector: 'app-PickRenter',
  templateUrl: './PickRenter.page.html',
  styleUrls: ['./PickRenter.page.scss'],
})
export class PickRenterPage{
;

  constructor(private modalController: ModalController) {

  }
  async presentModal() {
    const modal = await this.modalController.create({
      component: MessageRenterPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  };


}
