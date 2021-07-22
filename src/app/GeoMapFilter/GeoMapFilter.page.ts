import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-GeoMapFilter',
  templateUrl: './GeoMapFilter.page.html',
  styleUrls: ['./GeoMapFilter.page.scss'],
})
export class GeoMapFilterPage {

  constructor(private modalController: ModalController) { }

  async dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  };

}
