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
  constructor(
    private accountService: AccountService,
    private apiService: ApiService,
    private route: Router
  ) {}

  ngOnInit() {
    this.login();
  }

  login() {
    console.log(this.route.url.split("=")[1]);
    const code = this.route.url.split("=")[1];
    if (this.route.url.includes("code")) {
      const params = {};
      const body = {
        key: code
      };
      this.accountService.getUserDetails(params, body).subscribe(response => {
        alert(response);
      });
    }
    // window.location.href = "https://api.instagram.com/oauth/authorize?client_id=256885442544464&redirect_uri=https://localhost:4200/auth/facebook&scope=instagram_basic,pages_show_list"
    // setTimeout(() => {
    //   localStorage.setItem("url", "hfsk");
    // }, 3000);
  }
}
