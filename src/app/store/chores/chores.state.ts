import { Injectable } from '@angular/core'
import { NgxsOnInit, State, StateContext } from '@ngxs/store'
import { ApiService } from '../../services/api/api.service'
import { ChoresModel } from './chores.model'

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
}