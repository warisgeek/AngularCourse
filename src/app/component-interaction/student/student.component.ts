import { Component, OnInit, ViewChild } from '@angular/core';
import { StudentlistComponent } from '../studentlist/studentlist.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @ViewChild(StudentlistComponent) child: StudentlistComponent;
  isEdit = false;
  student: any;
  saveType = '';
  constructor() { }
  ngOnInit() {
  }
  onEdit(data: any) {
    this.isEdit = true;
    this.student = data;

  }
  onHide() {
    this.saveType = '';
    this.isEdit = false;
  }
  onAddNewStudent() {
    this.saveType = 'Add';
    this.student = { Name: '', RollNumber: '', Email: '', Class: '', Mobile: '' };
    this.isEdit = true;
  }
  onSave(data: any) {
    this.child.onSave(data, this.saveType);
    this.onHide();
  }

}
