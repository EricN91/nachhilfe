import {Component, Input, OnInit} from '@angular/core';
import {Course} from '../shared/course';

@Component({
  selector: 'div.app-course-list-item',
  templateUrl: './course-list-item.component.html',
  styleUrls: ['./course-list-item.component.scss']
})
export class CourseListItemComponent implements OnInit {
  @Input() course: Course | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
