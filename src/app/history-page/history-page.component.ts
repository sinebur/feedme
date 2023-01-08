import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { ScheduleHistory } from '../models/user.schedulehistory';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
  schedulehistory!: ScheduleHistory;
  days: any[];
  cards: any[];
  schedules: any[];
  constructor(public activatedRoute: ActivatedRoute) {

    let scheduleResult = this.getSchedule();

    if (scheduleResult) {
      this.schedulehistory = scheduleResult;
    }
    this.days = [];
    this.cards = [];
    this.schedules = [];
    console.log(this.schedulehistory);

    for (let sched of this.schedulehistory.schedules) {
      let schedCards = [];
      for (let i = 0; i < 7; i++) {
        let dayCards = [
          {
            title: 'Breakfast',
            dishtitle: sched.days[i].breakfast.title,
            price: sched.days[i].breakfast.price.toString(),
            kcal: sched.days[i].totalCals,
            description: sched.days[i].breakfast.description,
            ingridient: sched.days[i].breakfast.ingrideants
          },
          {
            title: 'Lunch',
            dishtitle: sched.days[i].lunch.title,
            price: sched.days[i].lunch.price.toString(),

            description: sched.days[i].lunch.description,
            ingridient: sched.days[i].lunch.ingrideants
          },
          {
            title: 'Dinner',
            dishtitle: sched.days[i].dinner.title,
            price: sched.days[i].dinner.price.toString(),

            description: sched.days[i].dinner.description,
            ingridient: sched.days[i].dinner.ingrideants
          }
        ];
        this.cards.push(...dayCards);        
        schedCards.push({
          cals: sched.days[i].totalCals,
          dayName: sched.days[i].name,
          mealTitle: sched.days[i].breakfast.title,
          breakfastIngridients: sched.days[i].breakfast.ingrideants, date: sched.days[i].date,
          price: sched.days[i].breakfast.price,
          mealDescription: sched.days[i].breakfast.description,
          cards: dayCards
        });
      }
      console.log(sched);
      console.log(sched.startDate);
      console.log(sched.startWeight);
      this.schedules.push({
        startdate: sched.startDate,
        enddate: sched.endDate,
        startweight: sched.startWeight,
        targetweight: sched.targetWeight,
        schedCards: schedCards          
      });
    }
  }

  ngOnInit(): void {
    
  }

  public getSchedule(): ScheduleHistory | null {
    const scheduleJson = localStorage.getItem(environment.scheduleHistoryName);

    if (scheduleJson) {
      let schedule: ScheduleHistory = JSON.parse(scheduleJson);
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
}
