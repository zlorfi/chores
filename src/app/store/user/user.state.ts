import { Injectable } from '@angular/core'
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store'
import { Observable } from 'rxjs'
import { ApiService } from '../../services/api/api.service'
import { Login, Logout } from './user.action'
import { UserModel } from './user.model'
import { map } from 'rxjs/operators'

@State<UserModel>({
  name: 'user',
  defaults: {
    id: null,
    apiKey: null,
    canEdit: false,
    name: null
  }
})
@Injectable()
export class UserState implements NgxsOnInit {
  public constructor(private api: ApiService) { }

  @Selector()
  public static getApiKey(state: UserModel): string {
    return state.apiKey
  }

  @Selector()
  public static getUserId(state: UserModel): string {
    return state.id
  }

  @Selector()
  public static canEdit(state: UserModel): boolean {
    return state.canEdit
  }

  @Selector()
  public static getUserName(state: UserModel): string {
    return state.name
  }

  @Action(Login)
  public login(ctx: StateContext<UserModel>, action: Login): Observable<any> {
    return this.api.login(action.email, action.password).pipe(
      map((response: any): any => {
        if (response.body && response.status === 200) {
          ctx.patchState({
            apiKey: response.body.token,
            id: response.body.user,
            canEdit: response.body.canEdit,
            name: response.body.name
          })

          localStorage.setItem('apiKey', response.body.token)
          localStorage.setItem('userId', response.body.user)
        }
      })
    )
  }

  @Action(Logout)
  public logout(ctx: StateContext<UserModel>): void {
    localStorage.removeItem('apiKey')
    localStorage.removeItem('userId')
    localStorage.removeItem('canEdit')

    ctx.patchState({
      id: null,
      apiKey: null
    })
  }

  public ngxsOnInit(ctx: StateContext<UserModel>): void {
    ctx.patchState({
      apiKey: localStorage.getItem('apiKey') || null,
      id: localStorage.getItem('userId') || null
    })
  }
}
