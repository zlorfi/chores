import { Component } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-chores',
  templateUrl: 'chores.page.html',
  styleUrls: ['chores.page.scss']
})
export class ChoresPage {

  constructor(public store: Store) { }

  public logout(): void {
    this.store.dispatch(new Logout())
  }
}
