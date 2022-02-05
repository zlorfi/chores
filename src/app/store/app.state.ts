import { Injectable } from '@angular/core'
import { State } from '@ngxs/store'
import { AppModel } from './app.model'
import { UserState } from './user/user.state'

@State<AppModel>({
  name: 'Chores',
  defaults: {
    user: null
  },
  children: [UserState]
})
@Injectable()
export class AppState { }
