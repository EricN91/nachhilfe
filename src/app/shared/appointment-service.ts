import {HttpClient} from "@angular/common/http";
import {catchError, Observable, retry, throwError} from "rxjs";
import {Appointment} from "./appointment";
import {Injectable} from "@angular/core";

//Verbindungen zur API

@Injectable()
export class AppointmentService {
  private api = 'http://nachhilfe22.s1810456021.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Array<Appointment>> {
    return this.http.get<Array<Appointment>>(`${this.api}/appointments`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getByOffer(id: number): Observable<Array<Appointment>> {
    return this.http.get<Array<Appointment>>(`${this.api}/appointments/offers/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  getById(id: number): Observable<Appointment> {
    return this.http.get<Appointment>(`${this.api}/appointments/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  delete(id: number): Observable<Appointment> {
    return this.http.delete<Appointment>(`${this.api}/appointments/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }

  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }
}
