import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SummaryPageRoutingModule } from './summary-routing.module';
import { SummaryPage } from './summary.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SummaryPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SummaryPage]
})
export class SummaryPageModule { }
