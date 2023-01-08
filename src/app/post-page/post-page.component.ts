import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
@Injectable({
  providedIn: 'root',
})
export class PostPageComponent implements OnInit {

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }

  CustomRecipeInfo = [{}];


  public recipe(data: {
    title: string, description: string, ingredients: string,
    hasfish: boolean, hasbeef: boolean, hasdairy: boolean, hasnuts: boolean, hasfruits: boolean,
    hasvegetables: boolean, hascereals: boolean, haschicken: boolean, haspork: boolean,
    isbreakfast: boolean, islunch: boolean, isdinner: boolean, price: number, calories: number;
  }): string {

    this.CustomRecipeInfo.push(data);
    console.log(this.CustomRecipeInfo);
    this.http.post(environment.apiUrl + '/Recepie/AddRecipe', {
      title: data.title, description: data.description, ingredients: data.ingredients,
      hasdairy: data.hasdairy, hasfish: data.hasfish, haschicken: data.haschicken, haspork: data.haspork, hasbeef: data.hasbeef, hasnuts: data.hasnuts,
      hasfruit: data.hasfruits, hasvegetables: data.hasvegetables, hascereals: data.hascereals,
      price: data.price, calories: data.calories, isbreakfast: data.isbreakfast, isdinner: data.isdinner, islunch: data.islunch  
    }).subscribe(r => { });
    return '';
  }
}
