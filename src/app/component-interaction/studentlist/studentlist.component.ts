import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students = [];
  student: any = { Name: '', RollNumber: '', Email: '', Class: '', Mobile: '' };
  studentIndex = '';
  @Output() edit = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.students = [{ Name: 'Waris', RollNumber: '001', Email: 'w@gmail.com', Class: 'Angular', Mobile: '088778' }, { Name: 'Damin', RollNumber: '002', Email: 'd@gmail.com', Class: 'Angular 7', Mobile: '987723283' }, { Name: 'Gunjan', RollNumber: '003', Email: 'g@gmail.com', Class: 'Angular 6 & & 7', Mobile: '97798343' }];
  }
  onEdit(data: { RollNumber: any; Name: any; Email: any; Mobile: any; Class: any; }, index: string) {
    this.student.RollNumber = data.RollNumber;
    this.studentIndex = index;
    this.student.Name = data.Name;
    this.student.Email = data.Email;
    this.student.Mobile = data.Mobile;
    this.student.Class = data.Class;
    this.edit.emit(this.student);
  }
  onSave() {
    this.students[this.studentIndex].Name = this.student.Name;
    this.students[this.studentIndex].RollNumber = this.student.RollNumber;
    this.students[this.studentIndex].Email = this.student.Email;
    this.students[this.studentIndex].Mobile = this.student.Mobile;
    this.students[this.studentIndex].Class = this.student.Class;
  }

}
