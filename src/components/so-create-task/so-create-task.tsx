import { Component } from "@stencil/core";

@Component({
  tag: "so-create-task",
  styleUrl: "so-create-task.css",
  shadow: false
})
export class SoCreateTask {
  textInput!: HTMLInputElement;

  componentDidLoad() {
    window.addEventListener('appload', () => {
      this.textInput.focus();
    });
  }

  render() {
    return (
      <div class="so-create-task-wrapper">
        <input
          class="so-create-task"
          aria-label="Add a task."
          name="addTask"
          id="addTask"
          placeholder="Add a task..."
          ref={(el) => this.textInput = el as HTMLInputElement}
        />
      </div>
    );
  }
}

//hsla(5, 80%, 72%, 1)
