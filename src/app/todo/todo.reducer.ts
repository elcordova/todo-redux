import * as fromTodo from './todo.actions';
import {TODO} from './model/todo.model';
import {from} from 'rxjs';

const estadoInicial: TODO[] = [new TODO('salvar a thanos'), new TODO('learn redux'), new TODO('destruir a los advenges')];

export function todoReducer(state = estadoInicial, action: fromTodo.Acciones): TODO[] {
  switch (action.type) {

    case fromTodo.AGREGAR_TODO:
      const todo = new TODO(action.texto);
      return [...state, todo];

    case fromTodo.TOGGLE_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {...todoEdit, completado: !todoEdit.completado};
        }
        return todoEdit;
      });


    case fromTodo.TOGGLE_ALL_TODO:
      return state.map(todoEdit => {
        return {...todoEdit, completado: action.value};
      });

    case fromTodo.EDIT_TODO:
      return state.map(todoEdit => {
        if (todoEdit.id === action.id) {
          return {...todoEdit, texto: action.texto};
        }
        return todoEdit;
      });

    case fromTodo.DELETE_TODO:
      return state.filter(todoDelete =>
        todoDelete.id !== action.id
      );

    case fromTodo.DELETE_COMPLETED_TODO:
      return state.filter(todoCompleted => !todoCompleted.completado);
    default:
      return state;
  }
}
