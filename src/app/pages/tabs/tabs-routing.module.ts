import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    canActivate: [AuthService],
    children: [
      {
        path: 'chores',
        loadChildren: () => import('../chores/chores.module').then(m => m.ChoresPageModule)
      },
      {
        path: 'editChores',
        loadChildren: () => import('../edit-chores/edit-chores.module').then(m => m.EditChoresPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/chores',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/chores',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }
