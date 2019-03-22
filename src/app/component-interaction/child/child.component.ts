import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() childdata: any;
  @Input() childdata1: any;
  @Input() childdata2: any;
  constructor() { }

  ngOnInit() {
  }

}
