import { WeatherClient } from './../clients/weather.client';
import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../models/user.model';
import { Schedule } from '../models/user.schedule';

@Component({
  selector: 'app-secret',
  templateUrl: './secret.component.html',
  styleUrls: ['./secret.component.css'],
})
export class SecretComponent implements OnInit {
  public weather: Observable<any> = this.weatherClient.getWeatherData();

  constructor(
    private authenticationService: AuthenticationService,
    private weatherClient: WeatherClient,
    private router: Router,
    private http: HttpClient
  ) {
    let scheduleResult = this.getSchedule();

    if (scheduleResult) {
      this.router.navigate(['/result']);
    }
  }

  public getSchedule(): Schedule | null {
    const scheduleJson = localStorage.getItem(environment.currentScheduleName);

    if (scheduleJson) {
      let schedule: Schedule = JSON.parse(scheduleJson);
      return schedule;
    }
    return null;
  }

  ngOnInit(): void {
  }

  DairyFishChicken = [
    { id: 1, select: false, name: 'No dairy' },
    { id: 2, select: false, name: 'No fish' },
    { id: 3, select: false, name: 'No chicken' }
  ];

  PorkBeefNuts = [
    { id: 4, select: false, name: 'No pork' },
    { id: 5, select: false, name: 'No beef' },
    { id: 6, select: false, name: 'No nuts' }
  ];

  FruitsVegetablesCereals = [
    { id: 7, select: false, name: 'No fruits' },
    { id: 8, select: false, name: 'No vegetables' },
    { id: 9, select: false, name: 'No cereals' }
  ];

  onChangeExclude($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    this.DairyFishChicken = this.DairyFishChicken.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        return d;
      }
      return d;
    });
  }

  onChangeMeat($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    this.PorkBeefNuts = this.PorkBeefNuts.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        return d;
      }
      return d;
    });
  }

  onChangeMealtype($event: any) {
    const id = $event.target.value;
    const isChecked = $event.target.checked;
    this.FruitsVegetablesCereals = this.FruitsVegetablesCereals.map((d) => {
      if (d.id == id) {
        d.select = isChecked;
        return d;
      }
      return d;
    });
  }

  public getUser(): User | null {
    const userJson = localStorage.getItem('user');

    if (userJson) {
      let user: User = JSON.parse(userJson);
      return user;
    }
    return null;
  }

  WeightUsernameSearch = [{}];

  public onPress(data: { currentweight: string, targetweight: string }) {
    this.WeightUsernameSearch.push(data);
    this.router.navigate(['/result']);
  }
  public PrintTest(data: { targetweight: number, currentweight: number; }) {

    //filter is it cheched or not
    const dairy = this.DairyFishChicken.filter(function (item) { return (item.name == "No dairy"); })
      .map((obj) => obj.select)[0];
    const fish = this.DairyFishChicken.filter(function (item) { return (item.name == "No fish"); })
      .map((obj) => obj.select)[0];
    const chicken = this.DairyFishChicken.filter(function (item) { return (item.name == "No chicken"); })
      .map((obj) => obj.select)[0];
    //const smth = true || false;

    const pork = this.PorkBeefNuts.filter(function (item) { return (item.name == "No pork"); })
      .map((obj) => obj.select)[0];
    const beef = this.PorkBeefNuts.filter(function (item) { return (item.name == "No beef"); })
      .map((obj) => obj.select)[0];
    const nuts = this.PorkBeefNuts.filter(function (item) { return (item.name == "No nuts"); })
      .map((obj) => obj.select)[0];

    const fruits = this.FruitsVegetablesCereals.filter(function (item) { return (item.name == "No fruits"); })
      .map((obj) => obj.select)[0];
    const vegetables = this.FruitsVegetablesCereals.filter(function (item) { return (item.name == "No vegetables"); })
      .map((obj) => obj.select)[0];
    const cereals = this.FruitsVegetablesCereals.filter(function (item) { return (item.name == "No cereals"); })
      .map((obj) => obj.select)[0];

    const user = this.getUser();

    console.log("my username: " + user?.name);
    console.log("my targetweight: " + data.targetweight);
    console.log("my currentweight: " + data.currentweight);

    console.log("No dairy check status: " + dairy);
    console.log("No fish check status: " + fish);
    console.log("No pork check status: " + chicken);

    console.log("No chicken check status: " + pork);
    console.log("No chicken check status: " + beef);
    console.log("No chicken check status: " + nuts);

    console.log("No chicken check status: " + fruits);
    console.log("No chicken check status: " + vegetables);
    console.log("No chicken check status: " + cereals);

    this.http.post<Schedule>(environment.apiUrl + '/Schedule/CreateChedule', {
      Username: user?.name, NoDairy: dairy, NoFish: fish,
      NoChicken: chicken, NoPork: pork, NoBeef: beef, NoNuts: nuts, NoFruit: fruits, NoVegetables: vegetables,
      NoCereals: cereals, targetweight: data.targetweight, currentweight: data.currentweight
    }).subscribe(r => {
      let schedule = r;
      localStorage.setItem(environment.currentScheduleName, JSON.stringify(schedule));    
      this.router.navigate(['/result']);
    });
  }
}
