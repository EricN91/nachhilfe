import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Offer} from "./offer";

@Injectable()
export class OfferService {
  private api = 'http://nachhilfe22.s1810456021.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Offer>> {
    return this.http.get<Array<Offer>>(`${this.api}/offers`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getById(id: number): Observable<Offer> {
    return this.http.get<Offer>(`${this.api}/offers/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  delete(id: number): Observable<Offer> {
    return this.http.delete<Offer>(`${this.api}/offers/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  update(offer: Offer): Observable<Offer> {
    return this.http.put<Offer>(`${this.api}/offers/${offer.id}`, offer)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  create(offer: Offer): Observable<Offer> {
    return this.http.post<Offer>(`${this.api}/offers/`, offer)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }


}



