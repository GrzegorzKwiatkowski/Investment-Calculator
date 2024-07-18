import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserImputComponent } from './user/user-imput.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [HeaderComponent, UserImputComponent]
})
export class AppComponent {}
