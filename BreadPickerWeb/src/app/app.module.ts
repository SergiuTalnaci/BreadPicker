import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BreadService } from './shared/services/bread.service';
import { HttpClientModule } from '@angular/common/http';
import { BreadListComponent } from './bread/bread-list/bread-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BreadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BreadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
