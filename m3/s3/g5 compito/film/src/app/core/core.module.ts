import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModule } from './auth/login/login.module';
import { RegisterModule } from './auth/register/register.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LoginModule,
    RegisterModule
  ]
})
export class CoreModule { }
