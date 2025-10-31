import { Component, inject } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { TaskCardComponent } from "../task-card/task-card.component";

@Component({
  selector: 'app-task-list-section',
  imports: [TaskCardComponent],
  templateUrl: './task-list-section.component.html',
  styleUrl: './task-list-section.component.css'
})
export class TaskListSectionComponent {
  private readonly _taskService = inject(TaskService);

  ngOnInit() {
    this._taskService.todoTasks.subscribe((todoList) => {
      console.log('Lista de TODOS: ', todoList);
    });
  }
}
