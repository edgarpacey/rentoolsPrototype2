import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-NearByListings',
  templateUrl: './NearByListings.page.html',
  styleUrls: ['./NearByListings.page.scss'],
})
export class NearByListingsPage implements OnInit {
  public NearByListings: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.NearByListings = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
