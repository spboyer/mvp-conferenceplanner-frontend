/* tslint:disable use-pipe-transform-interface */
import { Pipe, PipeTransform } from '@angular/core';

import { Session } from './model';

@Pipe({ name: 'day' })
export class DayPipe implements PipeTransform {
  transform(allSessions: Session[], day: number) {
    return allSessions.filter(session => new Date(session.startTime).getDay() === day);
  }
}
