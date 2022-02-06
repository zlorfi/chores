import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditChoresPage } from './edit-chores.page';

const routes: Routes = [
  {
    path: '',
    component: EditChoresPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditChoresPageRoutingModule { }
