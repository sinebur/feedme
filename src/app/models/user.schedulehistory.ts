import { Schedule } from '../models/user.schedule';

export class ScheduleHistory {
  public schedules: Schedule[];

  constructor(schedules: Schedule[]) {
    this.schedules = schedules;
  }
}
