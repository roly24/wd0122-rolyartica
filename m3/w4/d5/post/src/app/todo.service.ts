import { Injectable } from '@angular/core';
import {CTodo} from '../class/classe';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  contructor() {} 

  todos:CTodo[] = [
    { 
      id:1,
      tittle: 'imparare ngular',
    },
    { 
      id:2,
      tittle: 'creare un ap angular',
      completed:false
    },

    
  ]
  lastId = 3;
  asddTodo(todo:CTodo){
    todo.id =this.lastId
    this.todos.push(todo);
    this.lastId ++;
  }

  deleteTodo(){}
  updateTodo(){}
  getTodoById(){}
}





}
