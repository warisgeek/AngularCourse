import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css'],
  providers: [StudentService]
})
export class StudentComponent implements OnInit {
  students = [];
  student: any;
  constructor(private studentService: StudentService) { }

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }

  onDelete(index: any) {
    this.studentService.deleteStudent(index);
  }
  onUpdate(index: any) {
    this.studentService.updateStudent(this.student, index);
  }
  onAdd() {
    this.studentService.addStudent(this.student);
  }

}
