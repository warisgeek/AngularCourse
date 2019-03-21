import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  isEdit = false;
  student:any;
  constructor() { }
  ngOnInit() {
  }
  onEdit(data){
    this.isEdit = true;
    this.student=data;

  }
  onSave(data){
    debugger;
  }

}
