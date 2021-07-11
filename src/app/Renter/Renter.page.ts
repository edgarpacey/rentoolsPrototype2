import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Renter',
  templateUrl: './Renter.page.html',
  styleUrls: ['./Renter.page.scss'],
})
export class RenterPage implements OnInit {
  public Renter: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Renter = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
