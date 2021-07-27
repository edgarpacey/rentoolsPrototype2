import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-GeoMapFilter',
  templateUrl: './GeoMapFilter.page.html',
  styleUrls: ['./GeoMapFilter.page.scss'],
})
export class GeoMapFilterPage {
  rangeVal:string;
  currentRange:string;


  constructor(private modalController: ModalController) { 
  }
  newRange:any;

  
  async dismiss() {
    this.modalController.dismiss({
      'dismissed': true
    });
  };

  async filter() {
    const newRange = bruh.value * 1609.344;
    this.modalController.dismiss({
      'dismissed': true
    });
    console.log(newRange)
  }




  

  

}
