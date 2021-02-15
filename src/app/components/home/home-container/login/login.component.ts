import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(public accountService: AccountService) {}

  ngOnInit() {
    this.login();
  }

  login() {
    // window.open("http://localhost:4200/auth/facebook1");
  }

  loginWithInstagram() {
    const url = this.accountService.getLogin();
    window.location.href = url;
  }
}
