import { Meal } from '../models/user.meal';

export class ScheduleDay {
  public totalCals: number;
  public name: string;
  public date: Date;
  public breakfast: Meal;
  public dinner: Meal;
  public lunch: Meal;

  constructor(totalCals: number, name: string, date: Date, breakfast: Meal, dinner: Meal, lunch: Meal) {
    this.totalCals = totalCals;
    this.name = name;
    this.date = date;
    this.breakfast = breakfast;
    this.dinner = dinner;
    this.lunch = lunch;
  }
}
