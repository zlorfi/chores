import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { WeeklySummary } from 'src/app/store/chores/chores.action';
import { Day } from 'src/app/store/chores/chores.model';
import { ChoresState } from 'src/app/store/chores/chores.state';
import * as moment from 'moment'

@Component({
  selector: 'app-summary',
  templateUrl: './summary.page.html',
  styleUrls: ['./summary.page.scss'],
})
export class SummaryPage implements OnInit {
  @Select(ChoresState.weeklySummary)
  public summary$: Observable<Day[]>

  constructor(public store: Store) { }


  public calculatePercentage(day: Day): number {
    return (day.done / day.sum) * 100
  }

  public colorDay(day: Day): string {
    const percentage = this.calculatePercentage(day)

    if (percentage > 70) {
      return 'success'
    } else
      if (percentage > 50 && percentage <= 70) {
        return 'warning'
      } else
        if (percentage <= 50) {
          return 'danger'
        }
  }

  public humanizeDate(date: string): string {
    return moment(date).calendar(null, {
      sameDay: '[Today]',
      nextDay: '[Tomorrow]',
      nextWeek: 'dddd',
      lastDay: '[Yesterday]',
      lastWeek: '[Last] dddd',
      sameElse: 'DD/MM/YYYY'
    })
  }

  ngOnInit(): void {
    this.store.dispatch(new WeeklySummary)
    console.log(this.summary$)
  }
}
