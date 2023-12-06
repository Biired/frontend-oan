import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root",
})
export class UserGuard {
  constructor(public router: Router) {}

  canUser(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // Guard for user is login or not
    this.router.navigate(["/home"]);
  }
}
