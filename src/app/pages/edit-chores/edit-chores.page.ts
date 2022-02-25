import { Component } from '@angular/core';
import { IonRouterOutlet, ModalController } from '@ionic/angular';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { UpdateChore } from 'src/app/store/chores/chores.action';
import { Chore } from 'src/app/store/chores/chores.model';
import { ChoresState } from 'src/app/store/chores/chores.state';

@Component({
  selector: 'app-editChores',
  templateUrl: 'edit-chores.page.html',
  styleUrls: ['edit-chores.page.scss']
})
export class EditChoresPage {
  @Select(ChoresState.getChores)
  public chores$: Observable<Chore[]>

  constructor(public routerOutlet: IonRouterOutlet, public modalController: ModalController, private store: Store) { }

  public checkChore(id: string, day: string, value: boolean) {
    this.store.dispatch(new UpdateChore(id, day, !value))
  }
}
