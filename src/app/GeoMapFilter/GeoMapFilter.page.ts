import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-GeoMapFilter',
  templateUrl: './GeoMapFilter.page.html',
  styleUrls: ['./GeoMapFilter.page.scss']
})
export class GeoMapFilterPage {
  rangeVal: string;
  currentRange: string;
  qacheer: any;


  circleRange;
  constructor(
    private modalController: ModalController,
    private router: Router
  ) {}
  newRange: any;

  async dismiss() {
    this.modalController.dismiss({
      dismissed: true
    });
  }

  async filter() {
    const newRange = qacheer.value * 1609.344;
    this.circleRange = newRange;
    this.modalController.dismiss({
      dismissed: true
    });
    let navigationExtras: NavigationExtras = {
      state: {
        circleRange: this.circleRange
      }
    };
    this.router.navigate([`GeoMap/${this.circleRange}`], navigationExtras);
    console.log(this.circleRange);
  }
}
