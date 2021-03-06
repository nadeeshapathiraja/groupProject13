import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupUsersTypeComponent } from './Componets/signup-users-type/signup-users-type.component';
import { DashbordComponent } from './Componets/dashbord/dashbord.component';
import { SigninComponent } from './Componets/signin/signin.component';
import { AdminComponent } from './Componets/admin/admin.component';
import { PoolmanagerComponent } from './Componets/poolmanager/poolmanager.component';
import { StudentsComponent } from './Componets/students/students.component';
import { CoachComponent } from './Componets/coach/coach.component';
import { StudentSignupComponent } from './Componets/student-signup/student-signup.component';
import { CoachSignupComponent } from './Componets/coach-signup/coach-signup.component';
import { PoolmanagerSignupComponent } from './Componets/poolmanager-signup/poolmanager-signup.component';
import { EventsComponent } from './Componets/events/events.component';
import { ContactComponent } from './Componets/contact/contact.component';
import { TestComponent } from './Componets/test/test.component';
import { StudentcountComponent } from './Componets/studentcount/studentcount.component';
import { WaterLevelComponent } from './Componets/water-level/water-level.component';
import { NewsComponent } from './Componets/news/news.component';
import { AboutusComponent } from './Componets/aboutus/aboutus.component';


const routes: Routes = [
{
  path: '',
  redirectTo: 'dashboard', 
  pathMatch:'full'
},

{
  path: 'register',
  component: SignupUsersTypeComponent
},
{
  path: 'news',
  component: NewsComponent
},
{
  path: 'aboutus',
  component: AboutusComponent,
{
  path: 'stucount',
  component: StudentcountComponent
},
{
  path: 'waterLevel',
  component: WaterLevelComponent
},

{
  path: 'signin',
  component: SigninComponent
},

{
  path: 'test',
  component: TestComponent
},

{
  path: 'admin',
  component: AdminComponent
},
{
  path: 'poolmanager',
  component: PoolmanagerComponent
},
{
  path: 'student',
  component: StudentsComponent
},
{
  path: 'coach',
  component: CoachComponent
},
{
  path: 'studentsignup',
  component: StudentSignupComponent
},
{
  path: 'events',
  component: EventsComponent
},

{
  path: 'contact',
  component: ContactComponent
},

{
  path: 'coachsignup',
  component: CoachSignupComponent
},
{
  path: 'poolmanagersignup',
  component: PoolmanagerSignupComponent
},

{
  path:'dashboard',
  component: DashbordComponent
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { 
  
}
