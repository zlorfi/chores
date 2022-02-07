import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChoresToday, ToggleItem } from 'src/app/store/chores/chores.action';
import { Chore } from 'src/app/store/chores/chores.model';
import { ChoresState } from 'src/app/store/chores/chores.state';
import { UserState } from 'src/app/store/user/user.state';

@Component({
  selector: 'app-chores',
  templateUrl: 'chores.page.html',
  styleUrls: ['chores.page.scss']
})
export class ChoresPage implements OnInit {
  @Select(ChoresState.getChores)
  public chores$: Observable<Chore[]>

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

  ngOnInit(): void {
    this.store.dispatch(new ChoresToday)
  }
}
