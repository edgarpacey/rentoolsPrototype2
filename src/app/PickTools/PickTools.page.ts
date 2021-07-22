import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MessageRenterPage } from '../MessageRenter/MessageRenter.page';

@Component({
  selector: 'app-PickTools',
  templateUrl: './PickTools.page.html',
  styleUrls: ['./PickTools.page.scss'],
})
export class PickToolsPage  {


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

