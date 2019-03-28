import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  // name = new FormControl('');
  password = new FormControl('');
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mobile: new FormControl(''),
    age: new FormControl(''),

  });
  constructor() { }

  ngOnInit() {
  }
  save() {
    if (this.myForm.invalid) {
      alert('Please fill the mandatory box');
    }
  }

}
