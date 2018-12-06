import {Action} from '@ngrx/store';

export const AGREGAR_TODO = '[TODO] agregar todo';
export const TOGGLE_TODO = '[TODO] toggle todo';
export const EDIT_TODO = '[TODO] edit todo';
export const DELETE_TODO = '[TODO] delete todo';
export const DELETE_COMPLETED_TODO = '[TODO] delete completed todo';
export const TOGGLE_ALL_TODO = '[TODO] toggle all todo';

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

export class EditTodoAction implements Action {
  readonly type = EDIT_TODO;

  constructor(public id: number, public texto: string) {

  }
}

export class DeleteTodoAction implements Action {
  readonly type = DELETE_TODO;

  constructor(public id: number) {

  }
}

export class ToggleAllTodoAction implements Action {
  readonly type = TOGGLE_ALL_TODO;

  constructor(public value: boolean) {

  }
}

export class DeleteCompletedTodoAction implements Action {
  readonly type = DELETE_COMPLETED_TODO;
}


export type Acciones =
  AgregarTodoAction
  | ToggleTodoAction
  | EditTodoAction
  | DeleteTodoAction
  | ToggleAllTodoAction
  | DeleteCompletedTodoAction;
