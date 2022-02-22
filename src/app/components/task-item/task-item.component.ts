import { Component, OnInit, Input } from '@angular/core';
import { TaskInterface } from 'src/app/TaskInterface';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
})
export class TaskItemComponent implements OnInit {
  @Input() task!: TaskInterface;

  constructor() {}

  ngOnInit(): void {}
}
