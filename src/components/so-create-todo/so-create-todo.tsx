import { Component, Event, EventEmitter, State, Listen } from "@stencil/core";

@Component({
  tag: "so-create-todo",
  styleUrl: "so-create-todo.css",
  shadow: true
})
export class SoCreateTodo {
  textInput!: HTMLInputElement;
  @Event() inputSubmit: EventEmitter;
  @State() value: string;

  componentDidLoad() {
    window.addEventListener("appload", () => {
      this.textInput.focus();
    });
  }

  handleInputChange = (event: any) => (this.value = event.target.value);

  @Listen("document:keydown", { passive: true })
  async keydown($event: KeyboardEvent) {
    if ($event.key.toLowerCase() === "enter") {
      this.inputSubmit.emit(this.value);
      this.textInput.value = '';
    }
  }

  render() {
    return (
      <div class="so-create-todo-wrapper">
        <input
          class="so-create-todo"
          aria-label="Add a task."
          name="addTodo"
          id="addTodo"
          placeholder="Add a task..."
          onInput={this.handleInputChange}
          ref={el => (this.textInput = el as HTMLInputElement)}
        />
      </div>
    );
  }
}
