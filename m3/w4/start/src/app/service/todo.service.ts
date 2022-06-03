import { Injectable } from '@angular/core';
import { CTodo } from '../class/classe';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor() { }

  todos:CTodo[] = [
    {
      id:1,
      title: 'imparare angular',
      completed:false
    },
    {
      id:2,
      title: 'creare un app angular',
      completed:false
    }
  ]
  lastId = 3;
  addTodo(todo:CTodo){
    todo.id = this.lastId;
    this.todos.push(todo)
    this.lastId ++;
  }

  deleteTodo(id:number){
    this.todos = this.todos.filter((res)=>{
      if(res.id == id){

        return false;
      }
      return true;
    })
  }

  updateTodo(id:number){
    this.todos = this.todos.map(todo => todo.id == id?{...todo, completed:!todo.completed}:todo)


  }

  
}
