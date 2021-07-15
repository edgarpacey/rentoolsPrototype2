import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-SignIn',
  templateUrl: './SignIn.page.html',
  styleUrls: ['./SignIn.page.scss'],
})
export class SignInPage implements OnInit {
  public SignIn: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.SignIn = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
