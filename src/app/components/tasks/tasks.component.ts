import { Component, OnInit } from '@angular/core';
import { TaskInterface } from '../../TaskInterface';
import { TASKS } from '../../tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  tasks: TaskInterface[] = TASKS;

  constructor() {}

  ngOnInit(): void {}
}
