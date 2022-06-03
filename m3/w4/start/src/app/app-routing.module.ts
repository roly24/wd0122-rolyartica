import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { TodoComponent } from './pages/todo/todo.component';

const routes: Routes = [

  {
    path: 'todo',
    component:TodoComponent
  },
  {
    path: 'completed',
    component:CompletedComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
