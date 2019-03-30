import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Input() student: any;
@Output() update = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }
  onUpdate() {
this.update.emit(this.student);
  }

}
