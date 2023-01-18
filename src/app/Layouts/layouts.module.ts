
import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';
import { ListaStudentsComponent } from './layout/lista-students/lista-students.component';
import { CoursesComponent } from './layout/courses/courses.component';
import { WelcomePageComponent } from './layout/welcome-page/welcome-page.component';



@NgModule({
  declarations: [
    DashboardLayoutComponent,
    ListaStudentsComponent,
    CoursesComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule,

  ],
  exports: [
    DashboardLayoutComponent,
  ]
})
export class LayoutsModule { }
