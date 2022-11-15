import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserDetailsComponent } from './modules/user-details/user-details.component';
import { ViewUserComponent } from './modules/view-user/view-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    ViewUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
