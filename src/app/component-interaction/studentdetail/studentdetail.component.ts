import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  @Input() student: any = { Name: '', RollNumber: '', Email: '', Class: '', Mobile: '' };
  @Output() save = new EventEmitter<any>();
  @Output() hide = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

  onSave() {
   this.save.emit(this.student);
  }
  onHide() {
    this.hide.emit();
  }

}
