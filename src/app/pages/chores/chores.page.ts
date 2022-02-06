import { Component, OnInit } from '@angular/core';
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

  constructor(public store: Store) { }

  public toggleItem(id: string): void {
    this.store.dispatch(new ToggleItem(id))
  }

  ngOnInit(): void {
    this.store.dispatch(new ChoresToday)
  }
}
