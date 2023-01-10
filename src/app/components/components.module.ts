import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModuleModule } from 'src/app/modules/material-module.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar/toolbar.component';
import { StudentsPageComponent } from './students-page/students-page.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';




@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    ModalDialogComponent,
    NavbarComponent,
    StudentsPageComponent,
    ToolbarComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModuleModule,
    RouterModule,
  ],
  exports: [
    ContentComponent,
    HeaderComponent,
    ModalDialogComponent,
    NavbarComponent,
    StudentsPageComponent,
    ToolbarComponent,
    MaterialModuleModule,
    ReactiveFormsModule,
  ]
})
export class ComponentsModule { }
