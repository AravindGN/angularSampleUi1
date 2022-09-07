import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UiBodyComponent } from './ui-body/ui-body.component';
import { UiNavbarComponent } from './ui-navbar/ui-navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { UiCardComponent } from './ui-card/ui-card.component';
import { UiVcardComponent } from './ui-vcard/ui-vcard.component';

@NgModule({
  declarations: [
    AppComponent,
    UiBodyComponent,
    UiNavbarComponent,
    UiCardComponent,
    UiVcardComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
