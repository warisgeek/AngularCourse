import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
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
    address: new FormGroup({
      city: new FormControl(''),
      pin: new FormControl('')

    })

  });
  myFormBuilder: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    // this.myFormBuilder = this.formBuilder.group({

    //   name: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.minLength(5)]),
    //   email: new FormControl('', [Validators.required, Validators.email]),
    //   mobile: new FormControl(''),
    //   age: new FormControl(''),
    //   address: new FormGroup({
    //     city: new FormControl(''),
    //     pin: new FormControl('')

    //   })
    // });
  }
  save() {
    if (this.myForm.invalid) {
      alert('Please fill the mandatory box');
    } else {
      console.log(this.myForm.value.address.pin);
    }
  }

}
