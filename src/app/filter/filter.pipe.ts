import {Pipe, PipeTransform} from '@angular/core';
import {TODO} from '../todo/model/todo.model';
import {filtrosValidos} from './filter.actions';

@Pipe({
  name: 'filterTodos'
})
export class FilterPipe implements PipeTransform {

  transform(todos: TODO[], currentFilter: filtrosValidos): TODO[] {
    switch (currentFilter) {
      case 'completados':
        return todos.filter(todo => todo.completado);
      case 'pendientes':
        return todos.filter(todo => !todo.completado);
      default:
        return todos;
    }
  }

}
