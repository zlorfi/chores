import { Injectable } from '@angular/core'
import { State } from '@ngxs/store'
import { AppModel } from './app.model'
import { ChoresState } from './chores/chores.state'
import { UserState } from './user/user.state'

@State<AppModel>({
  name: 'Chores',
  defaults: {
  },
  children: [UserState, ChoresState]
})
@Injectable()
export class AppState { }
