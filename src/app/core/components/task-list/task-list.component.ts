import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarefa } from '../../models/tarefa';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent {

  @Output() public editTaskEvent: EventEmitter<Tarefa> = new EventEmitter();

  @Input() public data: Tarefa[] = [];

  public editTask(task: Tarefa): void {
    this.editTaskEvent.emit(task);
  }
}
