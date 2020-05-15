
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpErrorResponse, HTTP_INTERCEPTORS, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError, Observable, of } from 'rxjs';

@Injectable()
export class ErrorIterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler ):Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        if (error.status === 401 || error.status === 404 || error.status == 0){
          return throwError(error.statusText);
        }

        if(error instanceof HttpErrorResponse){
          const applicationError = error.headers.get('Application-Error');
          if(applicationError){
            return throwError(applicationError)
          }
          const serverError = error.error;
          let modalStateErrors = '';
          if (typeof serverError.errors === 'object'){
            for (const key in serverError.errors)
            {
              if (serverError.errors[key]){
                modalStateErrors += serverError.errors[key]+'\n';
              }
            }
          }
          return throwError(modalStateErrors || serverError || 'Server Error');
        }
      })
    )
  }

}

export const ErrorIterceptorProvider ={
  provide: HTTP_INTERCEPTORS,
  useClass: ErrorIterceptor,
  multi: true
}

