import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Account',
  templateUrl: './Account.page.html',
  styleUrls: ['./Account.page.scss'],
})
export class AccountPage implements OnInit {
  public Account: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Account = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
