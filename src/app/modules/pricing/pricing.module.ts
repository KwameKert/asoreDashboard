import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AddPricingComponent } from './components/add-pricing/add-pricing.component';
import { ViewPricingComponent } from './components/view-pricing/view-pricing.component';
import { ListPricingComponent } from './components/list-pricing/list-pricing.component';



@NgModule({
  declarations: [ListPricingComponent, AddPricingComponent, ViewPricingComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ListPricingComponent]
})
export class PricingModule { }
