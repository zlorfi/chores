import { Injectable } from '@angular/core'
import { Action, Selector, State, StateContext } from '@ngxs/store'
import { patch, updateItem } from '@ngxs/store/operators'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ApiService } from '../../services/api/api.service'
import { ChoresToday, GetChores, ToggleItem, UpdateChore, WeeklySummary } from './chores.action'
import { DailyChore, ChoresModel, Day, Chore } from './chores.model'
import { size as _size } from 'lodash'

@State<ChoresModel>({
  name: 'chores',
  defaults: {
    items: [],
    summary: [],
    chores: []
  }
})
@Injectable()
export class ChoresState {
  public constructor(private api: ApiService) { }

  @Selector()
  public static getChoresToday(state: ChoresModel): DailyChore[] {
    return state.items
  }

  @Selector()
  public static getChores(state: ChoresModel): Chore[] {
    return state.chores
  }

  @Selector()
  public static allDone(state: ChoresModel): boolean {
    return state.items.every(chore => chore.complete)
  }

  @Selector()
  public static amountLeft(state: ChoresModel): number {
    return _size(state.items.filter(chore => !chore.complete))
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

  @Action(GetChores)
  public getChores(ctx: StateContext<ChoresModel>): Observable<any> {
    return this.api.getChores().pipe(map((response: any): any => {
      if (response.status === 200) {
        return ctx.patchState({
          chores: response.body
        })
      }
    }))
  }

  @Action(ToggleItem)
  public toggleItem(ctx: StateContext<ChoresModel>, action: ToggleItem): Observable<any> {
    return this.api.toggleItem(action.id).pipe(map((response: any): any => {
      if (response.status === 204) {
        const item = ctx.getState().items.find((item: DailyChore) => item.id === action.id)
        return ctx.setState(
          patch({
            items: updateItem((chore: DailyChore) => chore.id === action.id, patch({ complete: !item.complete }))
          })
        )
      }
    }))
  }


  @Action(UpdateChore)
  public updateChore(ctx: StateContext<ChoresModel>, action: UpdateChore): Observable<any> {
    return this.api.patchChore(action.id, action.key, action.value).pipe(map((response: any): any => {
      if (response.status === 200) {
        const chore = ctx.getState().chores.find((chore: Chore) => chore.id === action.id)
        return ctx.setState(
          patch({
            chores: updateItem((chore: Chore) => chore.id === action.id, response.body)
          })
        )
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