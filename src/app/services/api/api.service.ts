import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment'

export interface Request {
  method: string
  endpoint: string
  params?: any
  body?: any
  formData?: FormData
  responseType?: any
  additionalHeader?: any
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public request<ResponseBody>(request: Request): Promise<any> {
    const apiKey = localStorage.getItem('apiKey')

    return this.http
      .request(request.method, `${environment.apiURL}/${request.endpoint}`, {
        headers: { 'API-Key': `${apiKey}`, ...request.additionalHeader },
        ...(request.params && { params: request.params }),
        ...(request.body && { body: request.body }),
        ...(request.formData && { body: request.formData }),
        ...(request.responseType && { responseType: request.responseType })
      })
      .toPromise()
  }

  public login(email: string, password: string): Promise<any> {
    return this.request<{ user: { apiKey: string } }>({
      method: 'post',
      endpoint: 'login',
      body: {
        user: { email, password }
      }
    })
  }
}
