import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-PickRenter',
  templateUrl: './PickRenter.page.html',
  styleUrls: ['./PickRenter.page.scss'],
})
export class PickRenterPage implements OnInit {
  public PickRenter: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.PickRenter = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
