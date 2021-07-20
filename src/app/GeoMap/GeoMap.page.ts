import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-GeoMap',
  templateUrl: './GeoMap.page.html',
  styleUrls: ['./GeoMap.page.scss']
})
export class GeoMapPage {

  map: any;
  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;
      constructor() {}
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
        zoom: 15,
        disableDefaultUI: true,
      };
      this.map = new google.maps.Map(this.mapRef.nativeElement, options);
      const coorArray: [number, number][] = [
        [34.415980, -119.866006],
        [34.413931, -119.867358],
      ];
      
    }
}