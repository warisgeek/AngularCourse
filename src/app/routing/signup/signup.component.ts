import { Component, OnInit } from '@angular/core';
import { DateService } from '../../date.service';
import { LoginService } from '../login/login.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [LoginService]
})
export class SignupComponent implements OnInit {
date:any;
  constructor(private dateService: DateService, private loginSerice: LoginService) { }

  ngOnInit() {
    this.date= this.dateService.GetCurrentDate();
  }

}
