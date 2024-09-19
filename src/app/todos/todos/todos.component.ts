import { Component, OnInit, DoCheck } from "@angular/core";
import { TodosService } from "../todos.service";
import { map, Observable } from "rxjs";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"]
})
export class TodosComponent implements OnInit, DoCheck {
  value: string = "";
  isFooterVisible!: Observable<boolean>;

  constructor(private todoService: TodosService) {}
  ngDoCheck(): void {
    this.isFooterVisible = this.todoService.todos$.pipe(
      map(todos => todos.length > 0)
    )
  }

  handleEnter() {
    this.todoService.addTodo(this.value);
    this.value = "";
  }

  ngOnInit(): void {}
}
