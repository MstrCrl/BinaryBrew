import { NgModule,  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';


import { HomePageRoutingModule } from './home-routing.module';

import { ProductCardComponent } from '../product-card/product-card.component';  // Import the ProductCardComponent

import { ProductCardComponent1Component } from '../product-card-component1/product-card-component1.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage, ProductCardComponent, ProductCardComponent1Component],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class HomePageModule {}
