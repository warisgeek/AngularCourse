import { Component, OnInit } from '@angular/core';
import { StudentModel} from './student.model';


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
students: StudentModel[];
selectedStudent: StudentModel;

  constructor() { }

  ngOnInit() {
    // tslint:disable-next-line:max-line-length
    this.students = [{Name: 'Waris', RollNo: '001', Email: 'gmail.com', Class: 'Angular', Mobile: '965478996'}, {Name: 'Damin', RollNo: '002', Email: 'Damin@gmail.com', Class: 'Angular 7', Mobile: '965478990'}, {Name: 'Gunjan', RollNo: '003', Email: 'g@gmail.com', Class: 'Angular 7', Mobile: '9654745496'}, {Name: 'Prynka', RollNo: '004', Email: 'p@gmail.com', Class: 'HTML', Mobile: '965478996'}, {Name: 'Raghu', RollNo: '005', Email: 'r@gmail.com', Class: 'CSS', Mobile: '765478996'}, {Name: 'David', RollNo: '006', Email: 'd@gmail.com', Class: 'Java', Mobile: '895478996'}];
  }
  onSelect(student: StudentModel): void {
    this.selectedStudent = student;
  }

}
