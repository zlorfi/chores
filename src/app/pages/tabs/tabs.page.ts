import { Component, ViewChild } from '@angular/core';
import { IonTabs, NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChoresToday, GetChores, WeeklySummary } from 'src/app/store/chores/chores.action';
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

  @ViewChild('tabs') tabs: IonTabs

  public constructor(private store: Store, private navController: NavController) { }


  public onIonTabBarChanged(): void {
    const { selectedTab } = this.tabs.tabBar

    if (selectedTab === 'chores') {
      this.store.dispatch(new ChoresToday)
    } else if (selectedTab === 'summary') {
      this.store.dispatch(new WeeklySummary)
    } else if (selectedTab === 'editChores') {
      this.store.dispatch(new GetChores)
    }
  }

  public logout(): void {
    this.store.dispatch(new Logout())
    this.navController.navigateRoot('/login')
  }
}
