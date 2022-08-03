import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from "@angular/material/sidenav";
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { NotificationComponent } from './notification/notification.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { InfoComponent } from './info/info.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NotificationComponent,
    InfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatSnackBarModule,
    MatBottomSheetModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
