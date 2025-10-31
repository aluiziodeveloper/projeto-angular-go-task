import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Tarefas em "A fazer"
  private todoTasks$ = new BehaviorSubject<any[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable();

  // Tarefas em "Fazendo"
  private doingTasks$ = new BehaviorSubject<any[]>([]);
  readonly doingTasks = this.todoTasks$.asObservable();

  // Tarefas em "Concluído"
  private doneTasks$ = new BehaviorSubject<any[]>([]);
  readonly doneTasks = this.todoTasks$.asObservable();
}
