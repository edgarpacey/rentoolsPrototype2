import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-RenterProfile',
  templateUrl: './RenterProfile.page.html',
  styleUrls: ['./RenterProfile.page.scss'],
})
export class RenterProfilePage implements OnInit {
  public RenterProfile: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.RenterProfile = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
