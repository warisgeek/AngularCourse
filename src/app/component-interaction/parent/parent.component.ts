import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  student = {Name: '', Age: '', Mobile: '', Class: '' };
  currentStudent = {Name: '',  Mobile: '' };
  index: any;
  constructor() { }
  list = [];
  ngOnInit() {
  }
  addNew() {
    this.list.push(this.student);
    this.student = {Name: '', Age: '', Mobile: '', Class: '' };

  }
  onEdit(data, index) {
this.index = index;
    this.currentStudent.Name = data.Name;
    this.currentStudent.Mobile = data.Mobile;
  }

  onUpdated(data) {
this.list[this.index].Name = data.Name;
this.list[this.index].Mobile = data.Mobile;
  }
}
