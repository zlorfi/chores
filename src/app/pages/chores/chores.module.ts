import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChoresPage } from './chores.page';
import { ExploreContainerComponentModule } from '../../components/explore-container/explore-container.module';

import { ChoresPageRoutingModule } from './chores-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    ChoresPageRoutingModule
  ],
  declarations: [ChoresPage]
})
export class ChoresPageModule { }
