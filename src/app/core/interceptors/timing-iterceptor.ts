import {Injectable} from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpParams, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

@Injectable()
export class TimingInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.params.has('perf')) {
      return this.intercept1(req, next);
    }

    if (req.params.has('perf1')) {
      return this.intercept2(req, next);
    }

    return next.handle(req);
  }

  private intercept1 (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(req.url);
    const time = performance.now();
    req.params.delete('perf');

    return next.handle(req.clone()).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
             if (time) {
              console.log(`request by url ${event.url} start at ${time} and takes ${performance.now() - time}`);
            }

            return event;
          }
        })
      );
  }

  private intercept2 (req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      params: req.params.set('perf_s', performance.now().toString())
    });

    return next.handle(cloned).pipe(
        map((event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            const time = new URLSearchParams(event.url).get('perf_s');

             if (time) {
              console.log(`request by url ${event.url} start at ${time} and takes ${performance.now() - +time}`);
            }

            return event;
          }
        })
      );
  }
}
