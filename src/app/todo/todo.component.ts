import { Component, OnInit } from '@angular/core';
import {ToggleAllTodoAction} from './todo.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../app.reducers';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styles: []
})
export class TodoComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  toggleAllTodo(event) {
    const actionToggle = new ToggleAllTodoAction(event.target.checked);
    this.store.dispatch(actionToggle);
  }
}
