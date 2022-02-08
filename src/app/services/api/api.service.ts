import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { environment } from 'src/environments/environment'
import { Observable } from 'rxjs'
import { DailyChore } from 'src/app/store/chores/chores.model'
import { Store } from '@ngxs/store'
import { UserState } from 'src/app/store/user/user.state'

export interface Request {
  method: string
  endpoint: string
  params?: any
  body?: any
  headers?: HttpHeaders
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private store: Store) { }

  public request<ResponseBody>(request: Request): Observable<any> {
    return this.http
      .request(request.method, `${environment.apiURL}/${request.endpoint}`, {
        headers: request.headers,
        body: request.body,
        params: request.params,
        observe: 'response'
      })
  }

  private bearerToken(): HttpHeaders {
    const bearerToken = new HttpHeaders().append(
      'Authorization',
      'Bearer ' + this.store.selectSnapshot(UserState.getApiKey)
    )

    return bearerToken
  }

  public login(email: string, password: string): Observable<any> {
    return this.request<{ token: string, user: string }>({
      method: 'post',
      endpoint: 'login',
      body: {
        user: { email, password }
      }
    })
  }

  public logout(): Observable<any> {
    return this.request({
      method: 'delete',
      endpoint: 'logout'
    })
  }

  public getChoresToday(): Observable<any> {
    return this.request<{ body: { chores: { items: DailyChore[] } } }>({
      method: 'get',
      endpoint: 'days/today',
      params: { created_by: this.store.selectSnapshot(UserState.getUserId) },
      headers: this.bearerToken()
    })
  }

  public getChores(): Observable<any> {
    return this.request({
      method: 'get',
      endpoint: 'chores',
      headers: this.bearerToken()
    })
  }

  public patchChore(id: string, key: string, value: boolean): Observable<any> {
    return this.request({
      method: 'patch',
      endpoint: `chores/${id}`,
      body: {
        [key]: value
      },
      headers: this.bearerToken()
    })
  }

  public toggleItem(id: string): Observable<any> {
    return this.request({
      method: 'get',
      endpoint: `tasks/${id}/toggle`,
      headers: this.bearerToken()
    })
  }

  public summaryLastWeek(): Observable<any> {
    return this.request({
      method: 'get',
      endpoint: 'days/summary',
      headers: this.bearerToken()
    })
  }
}
