import { Component, OnInit, OnDestroy } from "@angular/core";
import { TodosService } from "../todos.service";
import { Observable, map } from "rxjs";
import { FilterEnum } from "../types";

@Component({
  selector: "app-footer",
  templateUrl: "./footer.component.html",
  styleUrls: ["./footer.component.scss"]
})
export class FooterComponent implements OnInit,OnDestroy {
  itemsLeft$ = new Observable<number>();
  filterOption = FilterEnum
  selectedOption!:Observable<FilterEnum>

  constructor(private todoSerevice: TodosService) {
    this.itemsLeft$ = todoSerevice.todos$.pipe(map(todos => todos.length));
    this.selectedOption = this.todoSerevice.selectedFilter$
  }

  ngOnInit(): void {}

  handleFilter(option: string) {
    switch (option) {
      case "all":
        this.todoSerevice.changeFilter(FilterEnum.ALL);
        break;
      case "completed":
        this.todoSerevice.changeFilter(FilterEnum.COMPLETED);
        break;
      case "active":
        this.todoSerevice.changeFilter(FilterEnum.ACTIVE);
        break;
      default:
        console.log("invalid case");
    }
  }

  selectedStyle(option: FilterEnum) {}

  handleClear() {
    this.todoSerevice.clearCompleted();
  }

  ngOnDestroy(): void {
  }
  
}
