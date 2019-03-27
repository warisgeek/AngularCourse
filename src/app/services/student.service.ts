import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  // tslint:disable-next-line:max-line-length
  students = [{ Name: 'Waris', RollNumber: '001', Email: 'w@gmail.com', Class: 'Angular', Mobile: '088778' }, { Name: 'Damin', RollNumber: '002', Email: 'd@gmail.com', Class: 'Angular 7', Mobile: '987723283' }, { Name: 'admin', RollNumber: '003', Email: 'w@gmail.com', Class: 'Angular', Mobile: '088778' }, { Name: 'Gunjan', RollNumber: '004', Email: 'g@gmail.com', Class: 'Angular 6 & & 7', Mobile: '97798343' }];
  constructor() { }

  getStudents() {
    return this.students;
  }
  addStudent(student) {
    this.students.push(student);

  }

  updateStudent(data, studentIndex) {
    this.students[studentIndex].Name = data.Name;
    this.students[studentIndex].RollNumber = data.RollNumber;
    this.students[studentIndex].Email = data.Email;
    this.students[studentIndex].Mobile = data.Mobile;
    this.students[studentIndex].Class = data.Class;
  }
  deleteStudent(index) {
   this.students.splice(index, 1);
  }
}
