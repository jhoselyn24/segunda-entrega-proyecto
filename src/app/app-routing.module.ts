import { WelcomePageComponent } from 'src/app/Layouts/layout/welcome-page/welcome-page.component';
import { CoursesComponent } from './Layouts/layout/courses/courses.component';
import { LayoutsModule } from 'src/app/Layouts/layouts.module';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsPageComponent } from './components/students-page/students-page.component';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';
import { ListaStudentsComponent } from './Layouts/layout/lista-students/lista-students.component';
const routes: Routes = [
  { path: 'dashboard',
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: WelcomePageComponent,
      },
      {
        path: 'add-students',
        component: StudentsPageComponent,
      },
      {
        path: 'list-students',
        component: ListaStudentsComponent,
      },
      {
        path: 'courses',
        component: CoursesComponent,
      }
      
    ]
  },
  { 
    path: '**',
    redirectTo: 'dashboard',
  },
  // {
  //   path: 'auth_login',
  //   component: LayoutComponent,
  //   children: [
  //     {
  //       path: 'login',
  //       component: LoginPageComponent,
  //     }
  //     {
  //       path: '**',
  //       redirectTo: 'login',
  //     }
  //   ]
  // }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
