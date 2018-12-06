import {Action} from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] agregar todo';
export const TOGGLE_TODO = '[TODO] toggle todo';
export const EDIT_TODO = '[TODO] edit todo';
export const DELETE_TODO = '[TODO] delete todo';

export class AgregarTodoAction implements Action {
  readonly type = AGREGAR_TODO;

  constructor(public texto: string) {
  }
}

export class ToggleTodoAction implements Action {
  readonly type = TOGGLE_TODO;

  constructor(public id: number) {
  }
}

export class EditTodoAction implements Action{
  readonly type = EDIT_TODO;
  constructor(public id:number, public texto: string){

  }
}

export class DeleteTodoAction implements Action{
  readonly type = DELETE_TODO;
  constructor(public id:number){

  }
}


export type Acciones = AgregarTodoAction | ToggleTodoAction | EditTodoAction | DeleteTodoAction;
