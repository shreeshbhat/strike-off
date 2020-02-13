import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import 'ionicons';

@Component({
  tag: 'so-todo-item',
  styleUrl: 'todo-item.css',
  shadow: false
})
export class TodoItem {
  @Prop() checked!: boolean;
  @Prop() text!: string;
  @Prop() todoId!: number;
  @Event() itemCheck!: EventEmitter;
  @Event() itemRemove!: EventEmitter;

  handleOnCheck = () => this.itemCheck.emit(this.todoId);
  handleOnRemove = () => this.itemRemove.emit(this.todoId);

  render() {
    return (
      <div class="todo-item">
        <div class="wrapper">
          <input
            id={'todo' + this.todoId.toString()}
            class="toggle"
            type="checkbox"
            onChange={this.handleOnCheck}
            checked={this.checked}
          />
          <label htmlFor={'todo' + this.todoId.toString()}
                class="label overflow-ellipsis">{this.text}</label>
        </div>
        <so-clear-button slot="end" class="flex-center delete"
            onButtonClick={this.handleOnRemove}>
          <ion-icon name="md-trash"/>
        </so-clear-button>
      </div>
    );
  }
}
