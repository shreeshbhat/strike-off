import { Component, Prop, Event, EventEmitter } from "@stencil/core";

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
      <ion-item class="item" lines="none">
        <div class="wrapper">
          <input
            class="toggle"
            type="checkbox"
            aria-label="Mark task completed."
            checked={this.checked}
            onChange={this.handleOnCheck}
          />

          <label class="label">{this.text}</label>

          {/* <ion-button fill="outline" class="delete" onClick={this.handleOnRemove}>
          <ion-icon slot="icon-only" name="close" />
        </ion-button> */}
        </div>
      </ion-item>
    );
  }
}
