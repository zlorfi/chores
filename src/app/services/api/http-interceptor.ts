import { ErrorService } from '../error/error.service'
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable, throwError } from 'rxjs'
import { catchError } from 'rxjs/operators'

@Injectable()
export class HttpConfigInterceptor implements HttpInterceptor {
  public constructor(public errorService: ErrorService) { }

  public intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const request = httpRequest.clone()

    return next.handle(request).pipe(catchError((error: HttpErrorResponse) => {
      if (error.status === 404) {
        this.errorService.showAlert(error && error.message ? error.message : 'Unknown error')
      }

      return throwError(error)
    }))
  }
}
