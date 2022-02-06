import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChoresPage } from './chores.page';
import { ChoresPageRoutingModule } from './chores-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    ChoresPageRoutingModule
  ],
  declarations: [ChoresPage]
})
export class ChoresPageModule { }
