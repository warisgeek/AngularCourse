import { Component, OnInit, Input } from '@angular/core';
import { StudentModel } from '../students/student.model';
@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {
  @Input() student: StudentModel;
  constructor() { }

  ngOnInit() {
  }

}
