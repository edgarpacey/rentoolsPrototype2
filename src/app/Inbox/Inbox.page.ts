import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Inbox',
  templateUrl: './Inbox.page.html',
  styleUrls: ['./Inbox.page.scss'],
})
export class InboxPage implements OnInit {
  public Inbox: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Inbox = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
