import { Route } from "@angular/router";

export const routes: Route[] = [
  {
    path: "home",
    loadComponent: () =>
      import("../home/home.component").then((m) => m.HomeComponent),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];