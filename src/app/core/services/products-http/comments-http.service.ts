import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

import { Comment } from '../../models';
import { CommentsAPI } from './json-server-config';

@Injectable()
export class CommentsHttpService {
  constructor(
    private http: HttpClient,
    @Inject(CommentsAPI) private url
  ) {
    this.url = this.url + '?productId=';
  }

  get(productId: Number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + productId.toString(), { params:  new HttpParams().set('perf1', 'true')})
      .pipe(
        (response) => response,
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {
    let errorMessage: string;

    // A client-side or network error occurred.
    if (err.error instanceof Error) {
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
    // The backend returned an unsuccessful response code.
    // The response body may contain clues as to what went wrong,
      errorMessage = `Backend returned code ${err.status}, body was: ${err.error}`;
    }

    console.error(errorMessage);
    return _throw(errorMessage);
  }
}
