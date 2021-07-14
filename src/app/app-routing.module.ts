import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/LogInOut/LogInOutPageModule',
    pathMatch: 'full'
  },
  {
    path: 'home/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'PickTools/:id',
    loadChildren: () => import('./PickTools/PickTools.module').then( m => m.PickToolsPageModule)
  },
  {
    path: 'PickRenter/:id',
    loadChildren: () => import('./PickRenter/PickRenter.module').then( m => m.PickRenterPageModule)
  },
  {
    path: 'RenterProfile/:id',
    loadChildren: () => import('./RenterProfile/RenterProfile.module').then( m => m.RenterProfilePageModule)
  },
  {
    path: 'Renter/:id',
    loadChildren: () => import('./Renter/Renter.module').then( m => m.RenterPageModule)
  },
  {
    path: 'CreateListing/:id',
    loadChildren: () => import('./CreateListing/CreateListing.module').then( m => m.CreateListingPageModule)
  },
  {
    path: 'Bookmarks/:id',
    loadChildren: () => import('./Bookmarks/Bookmarks.module').then( m => m.BookmarksPageModule)
  },
  {
    path: 'AboutUs/:id',
    loadChildren: () => import('./AboutUs/AboutUs.module').then( m => m.AboutUsPageModule)
  },
  {
    path: 'LogInOut/:id',
    loadChildren: () => import('./LogInOut/LogInOut.module').then( m => m.LogInOutPageModule)
  },
  {
    path: 'GeoMap/:id',
    loadChildren: () => import('./GeoMap/GeoMap.module').then( m => m.GeoMapPageModule)
  },
  {
    path: 'GeoMap/:id',
    loadChildren: () => import('./GeoMap/GeoMap.module').then( m => m.GeoMapPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
