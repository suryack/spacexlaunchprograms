import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";
import { AppService } from "../app.service";

@Injectable({
  providedIn: "root",
})
export class ProgramsService {
  launchYears = [
    2006,
    2007,
    2008,
    2009,
    2010,
    2011,
    2012,
    2013,
    2014,
    2015,
    2016,
    2017,
    2018,
    2019,
    2020,
  ];
  constructor(private appService: AppService) {}

  getLaunches(filter: any) {
    let url = environment.api + `?limit=100`;
    if (filter.Year !== 0) {
      url = url + `&launch_year=${filter.Year}`;
    }
    if (filter.SuccessLaunch !== undefined) {
      url = url + `&launch_success=${filter.SuccessLaunch}`;
    }
    if (filter.SuccessLanding !== undefined) {
      url = url + `&land_success=${filter.SuccessLanding}`;
    }

    return this.appService.getAll(url);
  }
}
