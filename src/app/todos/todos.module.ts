import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos/todos.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './body/body.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [
  {path:'',component:TodosComponent}
]


@NgModule({
  declarations: [TodosComponent, HeaderComponent, FooterComponent, BodyComponent, TasksComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes),
  ],
  exports:[TodosComponent,HeaderComponent,FooterComponent]
})
export class TodosModule { }
