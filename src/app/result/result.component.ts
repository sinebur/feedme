import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Schedule } from '../models/user.schedule';
import { Meal } from '../models/user.meal';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  currentDate: Date;
  nextMonday: Date;
  nextTuesday: Date;
  nextWednesday: Date;
  nextThursday: Date;
  nextFriday: Date;
  nextSaturday: Date;
  nextSunday: Date;

  schedule!: Schedule;
  meals!: Meal;
  days: any[];
  cards: any[];


  constructor(private http: HttpClient) {
    this.currentDate = new Date();
    this.currentDate.setDate(this.currentDate.getDate() + 7);
    this.nextMonday = this.getNextWeekday(this.currentDate, 1);
    this.nextTuesday = this.getNextWeekday(this.currentDate, 2);
    this.nextWednesday = this.getNextWeekday(this.currentDate, 3);
    this.nextThursday = this.getNextWeekday(this.currentDate, 4);
    this.nextFriday = this.getNextWeekday(this.currentDate, 5);
    this.nextSaturday = this.getNextWeekday(this.currentDate, 6);
    this.nextSunday = this.getNextWeekday(this.currentDate, 7);

    let scheduleResult = this.getSchedule();

    if (scheduleResult) {
      this.schedule = scheduleResult;
    }

    this.meals = this.schedule.days[0].breakfast;

    console.log(this.schedule)

    this.days = [];
    this.cards = [];

    for (let i = 0; i < 7; i++) {
      let dayCards = [
        {
          title: 'Breakfast',
          dishtitle: this.schedule.days[i].breakfast.title,
          price: this.schedule.days[i].breakfast.price.toString(),
          kcal: this.schedule.days[i].totalCals,
          description: this.schedule.days[i].breakfast.description,
          ingridient: this.schedule.days[i].breakfast.ingrideants
        },
        {
          title: 'Lunch',
          dishtitle: this.schedule.days[i].lunch.title,
          price: this.schedule.days[i].lunch.price.toString(),

          description: this.schedule.days[i].lunch.description,
          ingridient: this.schedule.days[i].lunch.ingrideants
        },
        {
          title: 'Dinner',
          dishtitle: this.schedule.days[i].dinner.title,
          price: this.schedule.days[i].dinner.price.toString(),

          description: this.schedule.days[i].dinner.description,
          ingridient: this.schedule.days[i].dinner.ingrideants
        }
      ];
      this.cards.push(...dayCards);

      this.days.push({
        cals: this.schedule.days[i].totalCals,
        dayName: this.schedule.days[i].name,
        mealTitle: this.schedule.days[i].breakfast.title,
        breakfastIngridients: this.schedule.days[i].breakfast.ingrideants, date: this.schedule.days[i].date,
        price: this.schedule.days[i].breakfast.price,
        mealDescription: this.schedule.days[i].breakfast.description,
        cards: dayCards
      });
    }
  }

  ngOnInit(): void {
    this.currentDate = new Date();
    this.currentDate.setDate(this.currentDate.getDate() + 7);   
  }

  public getSchedule(): Schedule | null {
    const scheduleJson = localStorage.getItem(environment.currentScheduleName);

    if (scheduleJson) {
      let schedule: Schedule = JSON.parse(scheduleJson);
      return schedule;
    }
    return null;
  }

  public getUser(): User | null {
    const userJson = localStorage.getItem('user');

    if (userJson) {
      let user: User = JSON.parse(userJson);
      return user;
    }
    return null;
  }

  getNextWeekday(currentDate: Date, dayOfWeek: number): Date {
    const nextWeekday = new Date(currentDate);
    return nextWeekday;
  }


}


