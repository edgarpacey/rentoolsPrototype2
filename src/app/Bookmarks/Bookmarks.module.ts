import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookmarksPageRoutingModule } from './Bookmarks-routing.module';

import { BookmarksPage } from './Bookmarks.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookmarksPageRoutingModule
  ],
  declarations: [BookmarksPage]
})
export class BookmarksPageModule {}
