// https://www.sitepoint.com/component-routing-angular-router/

import { ModuleWithProviders } from '@angular/core';
import { NgModule } from '@angular/core';
//import { RouterModule, Routes } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SalesComponent } from './sales/sales.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent
   // redirectTo: 'todos',
    //pathMatch: 'full'
  },
  {
    path: 'sales',
    
    component: SalesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);


// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule],
//   providers: []
// })
// export class AppRoutingModule {
// }