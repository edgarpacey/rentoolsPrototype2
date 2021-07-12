import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CreateListing',
  templateUrl: './CreateListing.page.html',
  styleUrls: ['./CreateListing.page.scss'],
})
export class CreateListingPage implements OnInit {
  public CreateListing: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.CreateListing = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
