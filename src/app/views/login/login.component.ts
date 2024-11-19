import { Component } from '@angular/core';
import { LoginformComponent } from '../../components/loginform/loginform.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [LoginformComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {}
