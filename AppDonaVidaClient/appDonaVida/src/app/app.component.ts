import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'appDonaVida';
  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.sendAuthStateChangeNotification(true);
  }
}
