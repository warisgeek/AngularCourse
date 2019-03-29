import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
profile = {Name: '', Mobile: '', Email: ''};
submited = false;
  constructor() { }

  ngOnInit() {
  }

  save(form) {
if (form.invalid) {
  this.submited = true;
}

    console.log(this.profile);
  }
}
