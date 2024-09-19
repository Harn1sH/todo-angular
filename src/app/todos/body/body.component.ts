import { Component, OnInit, DoCheck } from "@angular/core";
import { TodosService } from "../todos.service";
import { FilterEnum, Todo } from "../types";
import { combineLatest, Observable, map } from "rxjs";

@Component({
  selector: "app-body",
  templateUrl: "./body.component.html",
  styleUrls: ["./body.component.scss"]
})
export class BodyComponent implements OnInit, DoCheck {
  visibleTodos$ = new Observable<Todo[]>();
  isTodoVisible$ = new Observable<boolean>();

  constructor(private todoService: TodosService) {}

  ngDoCheck(): void {
    this.visibleTodos$ = combineLatest([
      this.todoService.todos$,
      this.todoService.filter$
    ]).pipe(
      map(([todo, filter]) =>
        todo.filter(task => {
          if (filter == FilterEnum.ACTIVE) return task.isCompleted == false;
          else if (filter == FilterEnum.COMPLETED)
            return task.isCompleted == true;
          else return task;
        })
      )
    );

    this.isTodoVisible$ = this.todoService.todos$.pipe(
      map(todos => todos.length > 0)
    );
  }

  ngOnInit(): void {}
}
