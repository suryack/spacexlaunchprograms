import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { LaunchProgramsComponent } from "./launch-programs.component";

const routes: Routes = [{ path: "", component: LaunchProgramsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LaunchProgramsRoutingModule {}
