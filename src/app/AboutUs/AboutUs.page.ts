import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-AboutUs',
  templateUrl: './AboutUs.page.html',
  styleUrls: ['./AboutUs.page.scss'],
})
export class AboutUsPage implements OnInit {
  public AboutUs: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.AboutUs = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
