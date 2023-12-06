import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { AccueilComponent } from "./accueil/accueil.component";
import { SharedModule } from "../../shared/shared.module";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [AccueilComponent],
  imports: [CommonModule, HomeRoutingModule, NgbAccordionModule],
})
export class HomeModule {}
