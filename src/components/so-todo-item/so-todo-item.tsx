import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import 'ionicons';

@Component({
  tag: 'so-todo-item',
  styleUrl: 'so-todo-item.css',
  shadow: true
})
export class SoTodoItem {
  @Prop() checked!: boolean;
  @Prop() text!: string;
  @Prop() todoId!: number;
  @Event() itemCheck!: EventEmitter;
  @Event() itemRemove!: EventEmitter;

  handleOnCheck = () => this.itemCheck.emit(this.todoId);
  handleOnRemove = () => this.itemRemove.emit(this.todoId);

  render() {
    return (
      <div class="item">
        <div class="wrapper">
          <input
            class="toggle"
            type="checkbox"
            id={'todo' + this.todoId.toString()}
            checked={this.checked}
            onChange={this.handleOnCheck}
          />
          <label htmlFor={'todo' + this.todoId.toString()}
                class="label overflow-ellipsis">{this.text}</label>
        </div>
        <so-clear-button slot="end" class="delete"
            onButtonClick={this.handleOnRemove}>
          <ion-icon name="md-trash"/>
        </so-clear-button>
      </div>
    );
  }
}
