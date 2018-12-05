import * as fromTodo from './todo.actions';
import {TODO} from './model/todo.model';

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

    default:
      return state;
  }
}
