import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }  from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { SalesComponent } from './sales/sales.component';
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SalesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
