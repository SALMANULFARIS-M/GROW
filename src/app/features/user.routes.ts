import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CountComponent } from "./count/count.component";

export const USER_ROUTES: Routes = [
  { path: '', component: HomeComponent }, // Default child route
  { path: 'counts', component: CountComponent }
];
