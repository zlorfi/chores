import { Injectable } from '@angular/core'
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store'
import { patch, updateItem } from '@ngxs/store/operators'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ApiService } from '../../services/api/api.service'
import { ChoresToday, ToggleItem } from './chores.action'
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

  @Selector()
  public static allDone(state: ChoresModel): boolean {
    return state.items.every(chore => chore.complete)
  }


  @Action(ChoresToday)
  public choresToday(ctx: StateContext<ChoresModel>): Observable<any> {
    return this.api.getChoresToday().pipe(map((response: any): any => {
      return ctx.patchState({
        items: response.body
      })
    }))
  }

  @Action(ToggleItem)
  public toggleItem(ctx: StateContext<ChoresModel>, action: ToggleItem): Observable<any> {
    return this.api.toggleItem(action.id).pipe(map((): any => {
      const item = ctx.getState().items.find((item: Chore) => item.id === action.id)
      return ctx.setState(
        patch({
          items: updateItem((chore: Chore) => chore.id === action.id, patch({ complete: !item.complete }))
        })
      )
    }))
  }
}