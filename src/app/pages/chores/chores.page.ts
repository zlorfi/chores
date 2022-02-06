import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { ChoresToday } from 'src/app/store/chores/chores.action';
import { Chore } from 'src/app/store/chores/chores.model';
import { ChoresState } from 'src/app/store/chores/chores.state';
import { Logout } from 'src/app/store/user/user.action';

@Component({
  selector: 'app-chores',
  templateUrl: 'chores.page.html',
  styleUrls: ['chores.page.scss']
})
export class ChoresPage implements OnInit {
  @Select(ChoresState.getChores)
  public chores$: Observable<Chore[]>

  constructor(public store: Store, private navController: NavController) { }

  public logout(): void {
    this.store.dispatch(new Logout())
    this.navController.navigateRoot('/login')
  }

  ngOnInit(): void {
    this.store.dispatch(new ChoresToday)
  }
}
