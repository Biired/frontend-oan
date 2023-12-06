import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AccueilComponent } from "./accueil/accueil.component";
import { NgbAccordionModule } from "@ng-bootstrap/ng-bootstrap";

const routes: Routes = [
  {
    path: "",
    component: AccueilComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule, NgbAccordionModule],
})
export class HomeRoutingModule {}
