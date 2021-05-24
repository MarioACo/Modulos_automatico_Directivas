import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HtmlComponent } from './html/html.component';
import { NarutoComponent } from './naruto/naruto.component';
import { DirectivasComponent } from './directivas/directivas.component';

@NgModule({
  declarations: [
    AppComponent,
    HtmlComponent,
    NarutoComponent,
    DirectivasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
