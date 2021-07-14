import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-GeoMap',
  templateUrl: './GeoMap.page.html',
  styleUrls: ['./GeoMap.page.scss'],
})
export class GeoMapPage implements OnInit {
  public GeoMap: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.GeoMap = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
