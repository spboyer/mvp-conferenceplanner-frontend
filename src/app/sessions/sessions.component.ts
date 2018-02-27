import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { DataService } from '../shared/data.service';
import { Session } from '../shared/model';

@Component({
    selector: 'app-conf-sessions',
    templateUrl: './sessions.component.html'
})
export class SessionsComponent implements OnInit {
    sessions: Session[];
    days: Day[] = new Array();
    dayNames: string[] = new Array();
    selectedDay = 0;

    constructor(private dataService: DataService) { }

    getSessions(): void {
      console.log('getting sessions');
      this.dataService
        .getSessions()
        .then(sessions => this.sessions = sessions)
        .then((sessions) => {
          console.log('date stuff');
          for (let s of sessions) {
              // load the days, of the week.
            let d = new Date(s.startTime);
            let n = this.dayOfWeek(d.getDay());

            let day = new Day();
            day.name = n;
            day.num = d.getDay();

            if (this.dayNames.indexOf(day.name) < 0) {
              this.days.push(day);
              this.dayNames.push(day.name);
            }
          }
        })
        .then(() => this.selectedDay = this.days[0].num);
    }

    dayOfWeek(i) {
      const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      return dayName[i];
    }

    setDay(day) {
      console.log(day);
      this.selectedDay = day;
    }

    ngOnInit() {
        this.getSessions();
    }


}

class Day {
  public name: string;
  public num: number;
}
