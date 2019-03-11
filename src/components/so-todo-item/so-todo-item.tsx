
import { Component, Prop, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'so-todo-item',
  styleUrl: "so-todo-item.css",
  shadow: true
})
export class SoTodoItem {
  @Prop() checked: boolean;
  @Prop() text: string;
  @Prop() index: string;
  @Event() itemCheck: EventEmitter;
  @Event() itemRemove: EventEmitter;

  handleOnCheck = () => this.itemCheck.emit(this.index);
  handleOnRemove = () => this.itemRemove.emit(this.index);

  render() {
    return (
      <li class={this.checked ? 'completed' : ''}>
        <input class="toggle" type="checkbox" checked={this.checked} onChange={this.handleOnCheck} />
        <label>{this.text}</label>
        <button class="destroy" onClick={this.handleOnRemove}></button>
      </li>
    );
  }
}
