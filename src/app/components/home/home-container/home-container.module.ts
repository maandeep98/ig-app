import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeContainerComponent } from "./home-container.component";
import { LoginComponent } from "./login/login.component";
import { RouterModule } from "@angular/router";
import { LoginOneComponent } from "./login-one/login-one.component";

export const routes: ModuleWithProviders = RouterModule.forChild([
  {
    path: "",
    redirectTo: "login"
  },
  {
    path: "",
    component: HomeContainerComponent,
    children: [
      {
        path: "login",
        component: LoginComponent
      },
      {
        path: "callback",
        component: LoginOneComponent
      },
      {
        path: "**",
        redirectTo: "callback"
      }
    ]
  }
]);

@NgModule({
  declarations: [HomeContainerComponent, LoginComponent, LoginOneComponent],
  imports: [CommonModule, RouterModule, routes],
  exports: [HomeContainerComponent]
})
export class HomeContainerModule {}
