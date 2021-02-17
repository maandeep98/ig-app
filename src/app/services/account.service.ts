import { Injectable } from "@angular/core";
import { ApiService } from "src/app/common/api.service";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class AccountService {
  constructor(private apiService: ApiService) {}

  openLoginPage(params): Observable<any> {
    const urlPath = "https://www.facebook.com/v9.0/dialog/oauth";
    // const urlPath = "https://www.test.com";
    return this.apiService.doGetObservableForQuery(urlPath, params);
  }

  getLogin() {
    const urlPath = "https://api.instagram.com/oauth/authorize?";
    const body = {
      client_id: environment.clientId,
      client_secret: environment.clientSecret
    };
    const result =
      urlPath +
      "&client_id=" +
      body.client_id +
      "&redirect_uri=" +
      environment.redirectUri +
      "&scope=user_profile,user_media&response_type=code";
    return result;
  }

  getUserDetails(params, body): Observable<any> {
    const urlPath = "https://mzxdx714zl.execute-api.us-east-1.amazonaws.com/production/token";
    return this.apiService.doPostObservableForQuery(urlPath, body, params);
  } 
}
