import { Component, Event, EventEmitter, State, Listen, h } from '@stencil/core';

@Component({
  tag: 'so-create-todo',
  styleUrl: 'so-create-todo.css',
  shadow: true
})
export class SoCreateTodo {
  textInput!: HTMLInputElement;
  @Event() inputSubmit!: EventEmitter;
  @State() value!: string;

  componentDidLoad() {
    window.addEventListener('appload', () => {
      this.textInput.focus();
    });
  }

  handleInputChange = (event: any) => (this.value = event.target.value);

  @Listen('keydown', { target: 'document' })
  async keydown($event: KeyboardEvent) {
    if ($event.key.toLowerCase() === 'enter') {
      this.emitInput();
    }
  }

  emitInput() {
    if(!!this.textInput.value) {
      this.inputSubmit.emit(this.value);
      this.textInput.value = '';
    }
  }

  render() {
    return (
      <div class="flex-center">
        <div class="create-group">
          <label class="label-wrapper overflow-ellipsis" htmlFor="addTodo">
            What would you like to do?
          </label>
          <div class="input-wrapper">
            <input
              class="so-create-todo"
              name="addTodo"
              id="addTodo"
              maxLength={50}
              onInput={this.handleInputChange}
              ref={el => (this.textInput = el as HTMLInputElement)}
            />
            <ion-button
              class="add-button"
              onClick={this.emitInput.bind(this)}>
                Add a task
            </ion-button>
          </div>
        </div>
      </div>
    );
  }
}
