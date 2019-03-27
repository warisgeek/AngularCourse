import { Component, OnInit } from '@angular/core';
import { DateService } from '../../date.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
date: any;
userName: any;
password: any;
  constructor(private dateService: DateService, private loginSerice: LoginService) { }

  ngOnInit() {
    this.date = this.dateService.GetCurrentDate();
  }

  onLogin() {
   const isValid = this.loginSerice.validateLogin(this.userName, this.password);
   alert(isValid);
  }

}
