import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchTransactionsComponent } from './fetch-transactions/fetch-transactions.component';
import { FetchReconcilliationsComponent } from './fetch-reconcilliations/fetch-reconcilliations.component';
import { SharedModule } from '../shared/shared.module';
import { ViewReconcilliationComponent } from './view-reconcilliation/view-reconcilliation.component';



@NgModule({
  declarations: [FetchTransactionsComponent, FetchReconcilliationsComponent, ViewReconcilliationComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FetchReconcilliationsComponent
  ]
})
export class TransactionModule { }
