import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-PickTools',
  templateUrl: './PickTools.page.html',
  styleUrls: ['./PickTools.page.scss'],
})
export class PickToolsPage implements OnInit {
  public PickTools: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.PickTools = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
