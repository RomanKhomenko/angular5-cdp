import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { _throw } from 'rxjs/observable/throw';

import { Comment } from '../../models';

@Injectable()
export class CommentsHttpService {
  private url = 'http://localhost:3000/comments?productId=';

  constructor(private http: HttpClient) { }

  get(productId: Number): Observable<Comment[]> {
    return this.http.get<Comment[]>(this.url + productId.toString())
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
