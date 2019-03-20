import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-besant-student',
  templateUrl: './besant-student.component.html',
  styleUrls: ['./besant-student.component.css']
})
export class BesantStudentComponent implements OnInit {
  students = [];
  isEdit = false;
  student: any = { Name: '', RollNumber: '', Email: '', Class: '', Mobile: '' };
  studentIndex = '';
  saveType = '';
  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.students = [{ Name: 'Waris', RollNumber: '001', Email: 'w@gmail.com', Class: 'Angular', Mobile: '088778' }, { Name: 'Damin', RollNumber: '002', Email: 'd@gmail.com', Class: 'Angular 7', Mobile: '987723283' }, { Name: 'Gunjan', RollNumber: '003', Email: 'g@gmail.com', Class: 'Angular 6 & & 7', Mobile: '97798343' }];
  }
  onEdit(data: { RollNumber: any; Name: any; Email: any; Mobile: any; Class: any; }, index: string) {
    this.saveType = 'Edit';
    this.studentIndex = index;
    this.student.RollNumber = data.RollNumber;
    this.student.Name = data.Name;
    this.student.Email = data.Email;
    this.student.Mobile = data.Mobile;
    this.student.Class = data.Class;
    this.isEdit = true;
  }
  onHideEdit() {
    this.saveType = '';
    this.isEdit = false;
    this.student = { Name: '', RollNumber: '', Email: '', Class: '', Mobile: '' };
  }
  onDelete(index: number) {
    if (window.confirm('Are you sure want to delete the student?')) {
      this.students.splice(index, 1);
    }
  }
  onAddNewStudent() {
    this.saveType = 'Add';
    this.isEdit = true;
  }
  onSave() {
    if (this.saveType === 'Edit') {
    this.students[this.studentIndex].Name = this.student.Name;
    this.students[this.studentIndex].RollNumber = this.student.RollNumber;
    this.students[this.studentIndex].Email = this.student.Email;
    this.students[this.studentIndex].Mobile = this.student.Mobile;
    this.students[this.studentIndex].Class = this.student.Class;
    } else {
      this.students.push(this.student);
    }
    this.onHideEdit();
  }

}
