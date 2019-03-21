import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { BesantStudentComponent } from './besant-student/besant-student.component';
import { UnderlineDirective} from './directives/underline.directive';
import { ColorDirective} from './directives/color.directive';
import { StudentComponent } from './component-interaction/student/student.component';
import { StudentlistComponent } from './component-interaction/studentlist/studentlist.component';
import { StudentdetailComponent } from './component-interaction/studentdetail/studentdetail.component';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    StudentDetailComponent,
    BesantStudentComponent,
    StudentComponent,
    StudentlistComponent,
    StudentdetailComponent,
    UnderlineDirective,
    ColorDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
