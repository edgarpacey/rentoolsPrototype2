import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: 'home/Rentools' },
    { title: 'Add Listing', url: '/CreateListing/CreateListingPageModule' },
    { title: 'Bookmarks', url: '/Bookmarks/BookmarksPageModule' },
    { title: 'About Us', url: '/AboutUs/AboutUsPageModule'},
    { title: 'Log Out', url: '/LogInOut/LogInOutPageModule'  },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
