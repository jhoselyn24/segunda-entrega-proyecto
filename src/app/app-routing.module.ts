
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsPageComponent } from './components/students-page/students-page.component';
import { DashboardLayoutComponent } from './Layouts/dashboard-layout/dashboard-layout.component';

const routes: Routes = [
  { path: '',
    component: DashboardLayoutComponent,
    children: [
      {
        path: 'students',
        component: StudentsPageComponent,
      }
    ]
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
