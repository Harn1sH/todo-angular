import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../types';
import { TodosService } from '../todos.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  @Input('todos') todosProp!:Todo

  constructor(private todoService:TodosService) { }

  handleStatus(task: Todo, status: boolean) {
    this.todoService.handleStatusChange(task,status)
  }

  ngOnInit(): void {
  }

}
