import { Component, OnInit } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { NearByListingsPage } from '../NearByListings/NearByListings.page';
import { GeoMapFilterPage } from '../GeoMapFilter/GeoMapFilter.page';

declare var google: any;

@Component({
  selector: 'app-GeoMap',
  templateUrl: './GeoMap.page.html',
  styleUrls: ['./GeoMap.page.scss']
})
export class GeoMapPage {

  map: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
      constructor(public modalController: ModalController) {}
    // ionic lifestyle method each time page opens the code will run and create a new map
    ionViewDidEnter() {
      this.ShowMap();
    }
    ShowMap() {
      const location = new google.maps.LatLng(
        37.338003, -121.884761
      );
      const options = {
        center: location,
        zoom: 13,
        disableDefaultUI: true,
      };
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      const coorArray: [number, number][] = [
        [37.338003, -121.884761],
      ];

      var circle = new google.maps.Circle({
          map: this.map,
          radius: 1609.344, // this is in meters
          fillColor: '#AA0000',
          center: location,
          strokeWeight: 0,
        });

      for (let i = 0; i < coorArray.length; i++) {
        const marks = coorArray[i];
        // Here we create the marker object
        new google.maps.Marker({
          position: { lat: marks[0], lng: marks[1] },
          map: this.map,
        });
      };
      
    };
    async presentModal() {
      const modal = await this.modalController.create({
        component: NearByListingsPage,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    };

    async presentfilterModal() {
      const modal = await this.modalController.create({
        component: GeoMapFilterPage,
        cssClass: 'my-custom-class'
      });
      return await modal.present();
    };

    
}
