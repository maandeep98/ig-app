import { AccountService } from "src/app/services/account.service";
import { Component, OnInit } from "@angular/core";
import { ApiService } from "src/app/common/api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-login-one",
  templateUrl: "./login-one.component.html",
  styleUrls: ["./login-one.component.scss"]
})
export class LoginOneComponent implements OnInit {
  code = "";
  userDetails;

  constructor(
    private accountService: AccountService,
    private apiService: ApiService,
    private route: Router
  ) {}

  ngOnInit() {
    this.login();
  }

  login() {
    this.code = this.route.url.split("=")[1].split("#_")[0];
    if (this.route.url.includes("code")) {
      const params = {};
      const body = {
        key: this.code
      };
      this.accountService.getUserDetails(params, body).subscribe(response => {
        this.userDetails = "No Response";
        if (response.error || response.errorMessage) {
          console.log(response.error);
        } else {
          this.userDetails = response;
        }
      });
    }
  }
}
