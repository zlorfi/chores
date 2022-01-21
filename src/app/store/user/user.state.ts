import { Injectable } from '@angular/core'
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store'
import { from, Observable } from 'rxjs'
import { ApiService } from '../../services/api/api.service'
import { Login } from './user.action'
import { UserModel } from './user.model'
import { map } from 'rxjs/operators'

@State<UserModel>({
  name: 'User',
  defaults: {
    id: null,
    apiKey: null
  }
})
@Injectable()
export class UserState implements NgxsOnInit {
  public constructor(private api: ApiService) {}

  @Selector()
  public static getApiKey(state: UserModel): string {
    return state.apiKey
  }

  public ngxsOnInit(ctx: StateContext<UserModel>): void {
    ctx.patchState({
      apiKey: localStorage.getItem('apiKey') || null
    })
  }

  @Action(Login)
  public login(ctx: StateContext<UserModel>, action: Login): Observable<any> {
    return from(this.api.login(action.email, action.password)).pipe(
      map((response: { token: string; user: string }): any => {
        ctx.patchState({
          apiKey: response.token,
          id: response.user
        })

        localStorage.setItem('apiKey', response.token)
      })
    )
  }
}
