import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-PremoteListing',
  templateUrl: './PremoteListing.page.html',
  styleUrls: ['./PremoteListing.page.scss'],
})
export class PremoteListingPage implements OnInit {
  public PremoteListing: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.PremoteListing = this.activatedRoute.snapshot.paramMap.get('id');
  }

}

