import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AppService {
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json",
    }),
  };
  constructor(private httpClient: HttpClient) {}

  create(url: any, data: any): Observable<any> {
    return this.httpClient
      .post<any>(url, JSON.stringify(data), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  getById(url: any): Observable<any> {
    return this.httpClient.get<any>(url).pipe(catchError(this.errorHandler));
  }

  getAll(url: any): Observable<any[]> {
    return this.httpClient.get<any[]>(url).pipe(catchError(this.errorHandler));
  }

  update(url: any, match: any): Observable<any> {
    return this.httpClient
      .put<any>(url, JSON.stringify(match), this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }

  delete(url: any) {
    return this.httpClient
      .delete<any>(url, this.httpOptions)
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: any) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
