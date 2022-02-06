import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditChoresPage } from './edit-chores.page';
import { EditChoresPageRoutingModule } from './edit-chores-routing.module';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ComponentsModule,
    EditChoresPageRoutingModule
  ],
  declarations: [EditChoresPage]
})
export class EditChoresPageModule { }
