import { DIALOG_DATA } from '@angular/cdk/dialog';
import { Component, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ITaskFormModalData } from '../../interfaces/task-form-modal-data.interface';

@Component({
  selector: 'app-task-form-modal',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './task-form-modal.component.html',
  styleUrl: './task-form-modal.component.css'
})
export class TaskFormModalComponent {
  readonly _data: ITaskFormModalData = inject(DIALOG_DATA);

  taskForm: FormGroup = new FormGroup({
    name: new FormControl(this._data.formValues.name, [
      Validators.required,
      Validators.minLength(10),
    ]),
    description: new FormControl(this._data.formValues.description, [
      Validators.required,
      Validators.minLength(10),
    ]),
  });

  onFormSubmit() {
    throw new Error('Method not implemented.');
  }
}
