import { Component } from '@angular/core';

import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private authService: AuthService) { }

  printUserData() {
    this.authService.getUser().subscribe(
      (res) => console.log(res),
      (err) => console.error(err)
    );
  }

}
