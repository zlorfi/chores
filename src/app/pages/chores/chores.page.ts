import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ToggleItem } from 'src/app/store/chores/chores.action';
import { DailyChore } from 'src/app/store/chores/chores.model';
import { ChoresState } from 'src/app/store/chores/chores.state';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  selector: 'app-chores',
  templateUrl: 'chores.page.html',
  styleUrls: ['chores.page.scss']
})
export class ChoresPage {
  @Select(ChoresState.getChoresToday)
  public dailyChores$: Observable<DailyChore[]>

  @Select(UserState.getUserName)
  public userName$: Observable<string>

  constructor(public store: Store, private navController: NavController) { }

  public toggleItem(id: string): void {
    this.store.dispatch(new ToggleItem(id)).subscribe({
      error: (error: any): void => {
        this.navController.navigateRoot('/login')
      }
    })
  }
}
