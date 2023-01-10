import { Student } from 'src/app/models/students.model';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalDialogComponent } from 'src/app/components/modal-dialog/modal-dialog.component';

@Component({
  selector: 'app-students-page',
  templateUrl: './students-page.component.html',
  styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent {

  students: Student[] = [
    new Student(1,'Jaden','Achire'),
    new Student(2,'Kenia','Gon'),
    new Student(3,'Lucas','Papel'),
    new Student(4,'Luciano','Lapiz'),
  ]
  displayedColumns = ['id', 'name', 'lastName','edit', 'delete'];

  constructor(private readonly dialogService: MatDialog){}

  agregarStudent() {
    const dialog = this.dialogService.open(ModalDialogComponent)

    dialog.afterClosed().subscribe((value) => {
      if (value) {
        const lastId = this.students[this.students.length - 1]?.id;
        this.students = [...this.students, new Student(lastId + 1, value.name, value.lastName)];
      }
    })
  }
  removeStudent(student: Student) {
    this.students = this.students.filter(
      (stu) => stu.id !== student.id 
    );
  }

  editStudent(student: Student) {
    const dialog = this.dialogService.open(ModalDialogComponent, {
      data: student,
    })

    dialog.afterClosed().subscribe((data) => {
      if (data) {
        this.students = this.students.map((stu) => stu.id === student.id ? { ...stu, ...data } : stu)
      }
    })
  }
}
