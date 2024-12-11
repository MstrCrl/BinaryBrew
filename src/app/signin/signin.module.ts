import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SigninPageRoutingModule } from './signin-routing.module';

import { SigninPage } from './signin.page';
import { ProductCardComponent } from '../product-card/product-card.component';  // Import the ProductCardComponent

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    SigninPageRoutingModule
  ],
  declarations: [SigninPage, ProductCardComponent]  // Add the ProductCardComponent here
})
export class SigninPageModule {}
