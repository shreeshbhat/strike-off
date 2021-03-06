import { Component, Prop, Event, EventEmitter, h } from '@stencil/core';
import 'ionicons';

@Component({
  tag: 'so-todo-item',
  styleUrl: 'todo-item.css',
  shadow: false,
})
export class TodoItem {
  @Prop() checked!: boolean;
  @Prop() text!: string;
  @Prop() todoId!: number;
  @Prop() allowDelete: boolean;
  @Event() itemCheck!: EventEmitter;
  @Event() itemRemove!: EventEmitter;

  handleOnCheck = () => this.itemCheck.emit(this.todoId);
  handleOnRemove = () => this.itemRemove.emit(this.todoId);

  render() {
    return (
      <div class="todo-item">
        <div class="wrapper">
          <input id={'todo' + this.todoId.toString()} class="toggle" type="checkbox" onChange={this.handleOnCheck} checked={this.checked} />
          <label htmlFor={'todo' + this.todoId.toString()} class="label overflow-ellipsis">
            {this.text}
          </label>
        </div>

        {this.allowDelete ?
          <so-button slot="end" class="flex-center delete" fill="clear" onButtonClick={this.handleOnRemove}>
            <ion-icon name="trash-outline" />
          </so-button>
          : null
        }
      </div>
    );
  }
}
