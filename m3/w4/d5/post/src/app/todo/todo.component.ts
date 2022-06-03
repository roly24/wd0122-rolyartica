import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  task class todo[]
  number: number;

  constructor(private todoService:TodoService) { }
this.task = todoService.task;
  }
ngOnInit(): void {}


id!:number
