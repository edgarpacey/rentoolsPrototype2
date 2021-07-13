import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-LogInOut',
  templateUrl: './LogInOut.page.html',
  styleUrls: ['./LogInOut.page.scss'],
})
export class LogInOutPage implements OnInit {
  public LogInOut: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.LogInOut = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
