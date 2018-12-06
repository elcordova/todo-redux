import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {TODO} from '../model/todo.model';
import {AppState} from '../../app.reducers';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {

  todos: TODO[];
  filtro: string;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.todos = [];
    this.store.subscribe(state => {
      this.todos = state.todos;
      this.filtro = state.filter;
    });

  }

}
