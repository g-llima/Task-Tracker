import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TaskInterface } from '../TaskInterface';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private apiUrl = 'https://angular-tasktracker-app.herokuapp.com/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<TaskInterface[]> {
    return this.http.get<TaskInterface[]>(this.apiUrl);
  }

  deleteTask(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<TaskInterface>(url);
  }
  updateTaskReminver(task: TaskInterface): Observable<TaskInterface> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<TaskInterface>(url, task, httpOptions);
  }
  addTask(task: TaskInterface): Observable<TaskInterface> {
    return this.http.post<TaskInterface>(this.apiUrl, task, httpOptions);
  }
}
