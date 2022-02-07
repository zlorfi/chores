import { Injectable } from '@angular/core'
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store'
import { patch, updateItem } from '@ngxs/store/operators'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ApiService } from '../../services/api/api.service'
import { ChoresToday, ToggleItem, WeeklySummary } from './chores.action'
import { Chore, ChoresModel, Day } from './chores.model'

@State<ChoresModel>({
  name: 'chores',
  defaults: {
    items: [],
    summary: []
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

  @Selector()
  public static amountLeft(state: ChoresModel): number {
    return state.items.filter(chore => !chore.complete).length
  }


  @Selector()
  public static weeklySummary(state: ChoresModel): Day[] {
    return state.summary
  }

  @Action(ChoresToday)
  public choresToday(ctx: StateContext<ChoresModel>): Observable<any> {
    return this.api.getChoresToday().pipe(map((response: any): any => {
      if (response.status === 200) {
        return ctx.patchState({
          items: response.body
        })
      }
    }))
  }

  @Action(ToggleItem)
  public toggleItem(ctx: StateContext<ChoresModel>, action: ToggleItem): Observable<any> {
    return this.api.toggleItem(action.id).pipe(map((response: any): any => {
      if (response.status === 204) {
        const item = ctx.getState().items.find((item: Chore) => item.id === action.id)
        ctx.setState(
          patch({
            items: updateItem((chore: Chore) => chore.id === action.id, patch({ complete: !item.complete }))
          })
        )

        ctx.dispatch(new WeeklySummary)
      }
    }))
  }

  @Action(WeeklySummary)
  public weeklySummary(ctx: StateContext<ChoresModel>): Observable<any> {
    return this.api.summaryLastWeek().pipe(map((response: any): any => {
      if (response.status === 200) {
        return ctx.patchState({
          summary: response.body
        })
      }
    }))
  }
}