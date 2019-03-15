import { Component, Prop, Event, EventEmitter } from "@stencil/core";

@Component({
  tag: "so-todo-item",
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
      <ion-item lines="none">
        <ion-checkbox
          class="toggle"
          aria-label="Strike off this task."
          checked={this.checked}
          onChange={this.handleOnCheck}
        />
        <ion-label class="label">{this.text}</ion-label>

        {/* <ion-button fill="outline" class="delete" onClick={this.handleOnRemove}>
          <ion-icon slot="icon-only" name="close" />
        </ion-button> */}
      </ion-item>
    );
  }
}
