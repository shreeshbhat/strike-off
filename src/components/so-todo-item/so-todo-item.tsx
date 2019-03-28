import { Component, Prop, Event, EventEmitter } from "@stencil/core";
import 'ionicons';

@Component({
  tag: "so-todo-item",
  styleUrl: "so-todo-item.css",
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
      <ion-item class="item" lines="full">
        <div class="wrapper">
          <input
            class="toggle"
            type="checkbox"
            aria-label="Mark task completed."
            checked={this.checked}
            onChange={this.handleOnCheck}
          />
          <label class="label">{this.text}</label>
        </div>
        <button slot="end" class="delete" onClick={this.handleOnRemove}>
          <ion-icon slot="icon-only" name="close" />
        </button>
      </ion-item>
    );
  }
}
