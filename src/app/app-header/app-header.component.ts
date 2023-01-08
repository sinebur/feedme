import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from './../services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  @Input()
    title!: string;
  ngOnInit(): void {
  }

  logout(): void {
    this.authenticationService.logout();
  }
}
