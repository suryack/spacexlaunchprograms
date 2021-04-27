import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { LaunchProgramsRoutingModule } from "./launch-programs-routing.module";
import { LaunchProgramsComponent } from "./launch-programs.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [LaunchProgramsComponent],
  imports: [CommonModule, LaunchProgramsRoutingModule, HttpClientModule],
})
export class LaunchProgramsModule {}
