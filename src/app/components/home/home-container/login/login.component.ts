import { Component, OnInit } from "@angular/core";
import { AccountService } from "src/app/services/account.service";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    public accountService: AccountService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIcon(
      "logo",
      sanitizer.bypassSecurityTrustResourceUrl("assets/instagram.svg")
    );
  }

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
