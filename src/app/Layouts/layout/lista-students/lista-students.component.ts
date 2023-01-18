import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/students.model';

@Component({
  selector: 'app-lista-students',
  templateUrl: './lista-students.component.html',
  styleUrls: ['./lista-students.component.scss']
})
export class ListaStudentsComponent {

  title='Lista de Alumnos';
  students: Student[] = [
    new Student(1,'Jaden','Achire'),
    new Student(2,'Kenia','Gon'),
    new Student(3,'Lucas','Papel'),
    new Student(4,'Luciano','Lapiz'),
  ]
  displayedColumns = ['id', 'name', 'lastName'];

}
