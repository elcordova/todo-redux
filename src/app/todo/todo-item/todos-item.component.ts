import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {TODO} from '../model/todo.model';
import {FormControl, Validators} from '@angular/forms';
import {Store} from '@ngrx/store';
import {AppState} from '../../app.reducers';
import {ToggleTodoAction} from '../todo.actions';

@Component({
  selector: 'app-todos-item',
  templateUrl: './todos-item.component.html',
  styles: []
})
export class TodosItemComponent implements OnInit {
  @Input() todo: TODO;
  @ViewChild('txtInputFisico') txtFisico: ElementRef;
  checkField: FormControl;
  txtInput: FormControl;
  editando: boolean;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit() {
    this.checkField = new FormControl(this.todo.completado);
    this.txtInput = new FormControl(this.todo.texto, Validators.required);
    this.checkField.valueChanges.subscribe(val => {
      const checkAction = new ToggleTodoAction(this.todo.id);
      this.store.dispatch(checkAction);
    });
  }

  editar() {
    this.editando = true;
    setTimeout(() => {
      this.txtFisico.nativeElement.select();
    }, 1);

  }

  terminarEdicion() {
    this.editando = false;
  }
}
