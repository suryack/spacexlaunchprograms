import { Component, OnInit } from "@angular/core";
import { ProgramsService } from "./programs.service";

@Component({
  selector: "app-launch-programs",
  templateUrl: "./launch-programs.component.html",
  styleUrls: ["./launch-programs.component.scss"],
})
export class LaunchProgramsComponent implements OnInit {
  launchYears: number[];
  launchPrograms: any[];
  filter: { Year: number; SuccessLaunch: any; SuccessLanding: any };
  constructor(private programsService: ProgramsService) {
    this.launchYears = this.programsService.launchYears;
    this.filter = {
      Year: 0,
      SuccessLaunch: undefined,
      SuccessLanding: undefined,
    };
    this.launchPrograms = new Array<any>();
  }

  ngOnInit(): void {
    this.getLaunches();
  }

  selectYear(year: number) {
    this.filter.Year = year;
    this.getLaunches();
  }
  selectLaunch(launch: any) {
    this.filter.SuccessLaunch = launch;
    this.getLaunches();
  }
  selectLanding(landing: any) {
    this.filter.SuccessLanding = landing;
    this.getLaunches();
  }

  getLaunches() {
    this.programsService.getLaunches(this.filter).subscribe((res) => {
      if (res) {
        this.launchPrograms = res;
      }
    });
  }
}
