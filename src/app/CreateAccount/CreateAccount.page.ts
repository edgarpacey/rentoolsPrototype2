import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-CreateAccount',
  templateUrl: './CreateAccount.page.html',
  styleUrls: ['./CreateAccount.page.scss'],
})
export class CreateAccountPage implements OnInit {
  public CreateAccount: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.CreateAccount = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
