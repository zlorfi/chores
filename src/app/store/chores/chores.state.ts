import { Injectable } from '@angular/core'
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ApiService } from '../../services/api/api.service'
import { ChoresToday } from './chores.action'
import { Chore, ChoresModel } from './chores.model'

@State<ChoresModel>({
  name: 'chores',
  defaults: {
    items: []
  }
})
@Injectable()
export class ChoresState implements NgxsOnInit {
  public constructor(private api: ApiService) { }

  public ngxsOnInit(ctx: StateContext<ChoresModel>): void {
  }

  @Selector()
  public static getChores(state: ChoresModel): Chore[] {
    return state.items
  }

  @Action(ChoresToday)
  public choresToday(ctx: StateContext<ChoresModel>): Observable<any> {
    return this.api.getChoresToday().pipe(map((response: any): any => {
      return ctx.patchState({
        items: response.body
      })
    }))
  }
}