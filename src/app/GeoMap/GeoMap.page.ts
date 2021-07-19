import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewChild, ElementRef } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-GeoMap',
  templateUrl: './GeoMap.page.html',
  styleUrls: ['./GeoMap.page.scss']
})
export class GeoMapPage implements OnInit {
  public GeoMap: any;

  map: any;

  @ViewChild('map', { read: ElementRef, static: false }) mapRef: ElementRef;

  constructor(private activatedRoute: ActivatedRoute) {}

  IonViewDidEnter() {
    this.showMap();
  }

  showMap() {
    const location = new google.maps.LatLng(-17.824858, 31.053028);
    const options = {
      center: location,
      zoom: 15,
      disableDefaultUI: true
    };
    this.map = new google.maps.Map(this.mapRef.nativeElement, options);
  }

  ngOnInit() {
    this.GeoMap = this.activatedRoute.snapshot.paramMap.get('id');
  }
}
