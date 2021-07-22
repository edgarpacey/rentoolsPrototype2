import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { NearByListingsPage } from './NearByListings/NearByListings.page';
import { GeoMapFilterPage } from './GeoMapFilter/GeoMapFilter.page';
import { MessageRenterPage } from './MessageRenter/MessageRenter.page';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent, NearByListingsPage, GeoMapFilterPage, MessageRenterPage],
  entryComponents: [NearByListingsPage, GeoMapFilterPage, MessageRenterPage],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
