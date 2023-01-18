import { Component, OnInit } from '@angular/core';
import { Courses } from 'src/app/models/courses.model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {

  title= 'Cursos';
  students: Courses[] = [
    new Courses(1,'Matematica'),
    new Courses(2,'Literatura'),
    new Courses(3,'Geografia'),
    new Courses(4,'Biologia'),
  ]
  displayedColumns = ['id', 'name'];


}
