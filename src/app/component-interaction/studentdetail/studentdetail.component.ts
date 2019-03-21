import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  @Input() student: any = { Name: '', RollNumber: '', Email: '', Class: '', Mobile: '' };
  @Output() save = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onSave(){
    debugger;
this.save.emit(this.student);
  }

}
