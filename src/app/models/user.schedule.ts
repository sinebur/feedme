import { ScheduleDay } from '../models/user.scheduleday';
export class Schedule {
  public days: ScheduleDay[];
  public startDate: Date;
  public endDate: Date;
  public startWeight: number;
  public targetWeight: number;
/*  public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public decimal StartWeight { get; set; }
        public decimal TargetWeight { get; set; }*/

  constructor(days: ScheduleDay[], startdate: Date, enddate: Date, startweight: number, targetweight:number ) {
    this.days = days;
    this.startDate = startdate;
    this.endDate = enddate;
    this.startWeight = startweight;
    this.targetWeight = targetweight;
  }
}
