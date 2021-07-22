import { Component, OnInit } from '@angular/core';
import { Platfrom } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-GeoMapFilter',
  templateUrl: './GeoMapFilter.page.html',
  styleUrls: ['./GeoMapFilter.page.scss'],
})
export class GeoMapFilterPage {
  rangeVal:string;
  constructor(private modalController: ModalController) { 
  }

  async dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  };

  t

}
