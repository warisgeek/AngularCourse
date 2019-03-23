import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-template',
  templateUrl: './test-template.component.html',
  styleUrls: ['./test-template.component.css']

})
export class TestTemplateComponent implements OnInit {
  color = 'blue';
 student = {Name: '', Age: '', Mobile: '', Class: '' };

  list = [];
  constructor() { }

  ngOnInit() {
    this.list = [{Name: 'Damin', Mobile: '9238923'}, {Name: 'Damin 1', Mobile: '9238923'}];
  }
  addNew() {
    this.list.push(this.student);
    this.student = {Name: '', Age: '', Mobile: '', Class: '' };
  }


//   onClick(htmlInfo) {
// console.log(htmlInfo);
//   }
//   onmouseover() {

//   }
//   onKeyUp() {
//     console.log('Even Fired');
//   }

//   changeColor() {
//     this.color = 'red';
//   }
//   onPressEnter($event) {

//           console.log('Entered text: ', $event.target.value);

//       }

//     combineKey(){
//       alert('Event Fired')
//     }

//     show(value){

//       alert(value)

//     }

//     saveData(){
//       alert(this.Name)
//       setTimeout(() => {
//         this.Name="Damin"
//       }, 1000);
//     }
}
