import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TaskStatusEnum } from '../enums/task-status.enum';
import { ITaskFormControls } from '../interfaces/task.form-controls.interface';
import { ITask } from '../interfaces/task.interface';
import { generateUniqueIdWithTimestamp } from '../utils/generate-unique-id-with-timestamp';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  // Tarefas em "A fazer"
  private todoTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly todoTasks = this.todoTasks$.asObservable();

  // Tarefas em "Fazendo"
  private doingTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doingTasks = this.todoTasks$.asObservable();

  // Tarefas em "Concluído"
  private doneTasks$ = new BehaviorSubject<ITask[]>([]);
  readonly doneTasks = this.todoTasks$.asObservable();

  addTask(taskInfos: ITaskFormControls) {
    const newTask: ITask = {
      ...taskInfos,
      status: TaskStatusEnum.TODO,
      id: generateUniqueIdWithTimestamp(),
      comments: [],
    };

    const currentList = this.todoTasks$.value;
    this.todoTasks$.next([...currentList, newTask]);
  }
}
