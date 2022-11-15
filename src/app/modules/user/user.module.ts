import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewUserComponent } from './view-user/view-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';



@NgModule({
  declarations: [
    ViewUserComponent,
    UserDetailsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
