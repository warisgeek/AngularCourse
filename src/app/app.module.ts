import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { BesantStudentComponent } from './besant-student/besant-student.component';
import { UnderlineDirective} from './directives/underline.directive';
import { ColorDirective} from './directives/color.directive';
import { HiddenDirective} from './directives/hidden.directive';
import { StudentComponent } from './component-interaction/student/student.component';
import { StudentlistComponent } from './component-interaction/studentlist/studentlist.component';
import { StudentdetailComponent } from './component-interaction/studentdetail/studentdetail.component';

import { OrderbyPipe } from './pipes/orderby.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { ParentComponent } from './component-interaction/parent/parent.component';
import { ChildComponent } from './component-interaction/child/child.component';
import { LoginComponent } from './routing/login/login.component';
import { SignupComponent } from './routing/signup/signup.component';
import { DashbordComponent } from './routing/dashbord/dashbord.component';
import { Routes, RouterModule } from '@angular/router';

const route: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'dashbord', component: DashbordComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'student', component: BesantStudentComponent}

];

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
    ColorDirective,
    HiddenDirective,
    OrderbyPipe,
    FilterPipe,
    ParentComponent,
    ChildComponent,
    LoginComponent,
    SignupComponent,
    DashbordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
