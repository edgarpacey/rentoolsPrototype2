import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home/Rentools' },
    { title: 'Add Listing', url: '/PickTools/PickToolsPageModule' },
    { title: 'Bookmarks', url: '/folder/Bookmarks' },
    { title: 'About Us', url: '/folder/About Us'},
    { title: 'Log Out', url: '/folder/Log Out'  },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
