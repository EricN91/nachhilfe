import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";


@Injectable()
export class CommentService {

private api = 'http://nachhilfe22.s1810456021.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Comment>> {
    return this.http.get<Array<Comment>>(`${this.api}/comments`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getById(id: number): Observable<Comment> {
    return this.http.get<Comment>(`${this.api}/comments/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  delete(id: number): Observable<Comment> {
    return this.http.delete<Comment>(`${this.api}/comments/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
