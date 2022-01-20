import { Injectable } from '@angular/core'
import { State } from '@ngxs/store'
import { AppModel } from './app.model'
import { UserState } from './user/user.state'

@State<AppModel>({
  name: 'Chores',
  defaults: {},
  children: [UserState]
})
@Injectable()
export class AppState {}
