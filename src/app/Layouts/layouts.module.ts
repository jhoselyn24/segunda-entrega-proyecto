import { RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardLayoutComponent } from './dashboard-layout/dashboard-layout.component';



@NgModule({
  declarations: [
    DashboardLayoutComponent
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
