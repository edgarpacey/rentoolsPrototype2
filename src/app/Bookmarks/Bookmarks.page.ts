import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-Bookmarks',
  templateUrl: './Bookmarks.page.html',
  styleUrls: ['./Bookmarks.page.scss'],
})
export class BookmarksPage implements OnInit {
  public Bookmarks: string;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.Bookmarks = this.activatedRoute.snapshot.paramMap.get('id');
  }

}
