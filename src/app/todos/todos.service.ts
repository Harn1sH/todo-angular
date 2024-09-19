import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { FilterEnum, Todo } from "./types";

@Injectable({
  providedIn: "root"
})
export class TodosService {
  todos$ = new BehaviorSubject<Todo[]>([]);

  filter$ = new BehaviorSubject<FilterEnum>(FilterEnum.ALL);

  selectedFilter$ = new BehaviorSubject<FilterEnum>(FilterEnum.ALL);

  mapFun(array: Todo): Todo {
    return { ...array, isCompleted: true };
  }

  addTodo(task: string) {
    const newTask: Todo = {
      id: Math.random().toString(16),
      task: task,
      isCompleted: false
    };
    this.todos$.next([...this.todos$.getValue(), newTask]);
  }

  changeFilter(option: FilterEnum) {
    this.filter$.next(option);
    this.selectedFilter$.next(option);
  }

  markCompleted() {
    let completedTask = this.todos$.getValue();
    this.todos$.next(completedTask.map(this.mapFun));
  }

  clearCompleted() {
    let completedTask: Todo[] = this.todos$
      .getValue()
      .filter(todo => !todo.isCompleted);
    this.todos$.next(completedTask);
  }

  handleStatusChange(task: Todo, status: boolean) {
    const newTodos = this.todos$.getValue().map(todo => {
      if (todo == task) {
        return { ...todo, isCompleted: status };
      } else return todo;
    });
    this.todos$.next(newTodos);
  }

  constructor() {}
}
