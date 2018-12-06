import {Component, OnInit} from '@angular/core';
import {filtrosValidos, SetFilterAction} from '../../filter/filter.actions';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {TODO} from '../model/todo.model';
import {DeleteCompletedTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todos-footer',
  templateUrl: './todos-footer.component.html',
  styles: []
})
export class TodosFooterComponent implements OnInit {

  filtrosValidos: filtrosValidos[] = ['completados', 'pendientes', 'todos'];
  currentFilter: filtrosValidos;
  pendientes: number;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.contarPendientes(state.todos);
    });
  }

  cambiarFiltro(filtro: filtrosValidos) {
    const actionSetFiltro = new SetFilterAction(filtro);
    this.store.dispatch(actionSetFiltro);
  }

  contarPendientes(todos: TODO[]) {
    this.pendientes = todos.filter(todo => !todo.completado).length;
  }

  clearCompleted() {
    const actionCompleted = new DeleteCompletedTodoAction();
    this.store.dispatch(actionCompleted);
  }
}
