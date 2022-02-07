import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChoresState } from 'src/app/store/chores/chores.state';
import { Logout } from 'src/app/store/user/user.action';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  @Select(UserState.canEdit)
  public canEdit$: Observable<boolean>

  @Select(ChoresState.allDone)
  public allDone$: Observable<boolean>

  @Select(ChoresState.amountLeft)
  public amountLeft$: Observable<number>

  public constructor(private store: Store, private navController: NavController) { }

  public logout(): void {
    this.store.dispatch(new Logout())
    this.navController.navigateRoot('/login')
  }
}
