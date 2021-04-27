import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "launches", pathMatch: "full" },
  {
    path: "launches",
    loadChildren: () =>
      import("./launch-programs/launch-programs.module").then(
        (m) => m.LaunchProgramsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
