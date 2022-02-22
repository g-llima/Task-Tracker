import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TaskInterface } from '../TaskInterface';
import { TASKS } from '../tasks';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  constructor() {}

  getTasks(): Observable<TaskInterface[]> {
    return of(TASKS);
  }
}
