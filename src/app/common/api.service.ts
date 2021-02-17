import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
// import { AuthService } from '../../auth/auth.service';

@Injectable({
  providedIn: "root"
})
export class ApiService {
  // accessToken = this.authService.getAccessToken();
  // private idToken: string = "Bearer " + this.accessToken;
  private headers = new HttpHeaders()
    .set("Content-Type", "application/x-www-form-urlencoded")
    .set("dataType", "jsonp");
  private headerCSV = new HttpHeaders().set(
    "Accept",
    "text/csv, application/csv, application/json"
  );

  constructor(private http: HttpClient) {}
  // get
  doGetObservable(url): Observable<any> {
    console.log(url);
    return this.http.get(url, { headers: this.headers });
  }

  // get with query params
  doGetObservableForQuery(url, params): Observable<any> {
    return this.http.get(url, { headers: this.headers, params });
  }

  // get request for csv file
  doGetObservableForCSV(url, params): Observable<any> {
    return this.http.get(url, {
      headers: this.headerCSV,
      responseType: "blob",
      observe: "response",
      params
    });
  }

  // Post
  doPostObservable(url, data): Observable<any> {
    return this.http.post(url, JSON.stringify(data), { headers: this.headers });
  }

  // post with query params
  doPostObservableForQuery(url, body, params): Observable<any> {
    const bod = new HttpParams()
      .set("client_id", body.client_id)
      .set("client_secret", body.client_secret)
      .set("grant_type", "authorization_code")
      .set("redirect_uri", body.redirect_uri)
      .set("code", body.code);
    return this.http.post(url, bod.toString(), {
      headers: this.headers,
      params
    });
  }

  // post with query params and receive csv file
  doPostObservableForCSV(url, body, params) {
    return this.http.post(url, body, {
      headers: this.headerCSV,
      responseType: "blob",
      observe: "response",
      params
    });
  }

  // put method with query
  doUpdateForQuery(url, params): Observable<any> {
    return this.http.put(url, null, {
      headers: this.headers,
      params
    });
  }

  // put method
  doUpdate(url, data): Observable<any> {
    return this.http.put(url, JSON.stringify(data), {
      headers: this.headers
    });
  }

  doDeleteForQuery(url, params): Observable<any> {
    return this.http.delete(url, { headers: this.headers, params });
  }

  private formatErrors(error: any) {
    console.log(error);
    return throwError(error.error);
  }
}
