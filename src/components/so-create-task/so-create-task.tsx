import { Component } from '@stencil/core';

@Component({
  tag: 'so-create-task',
  styleUrl: 'so-create-task.css',
  shadow: true
})
export class SoCreateTask {

  render() {
    return (
      <div class="so-create-task-wrapper">
        <input class="so-create-task">
        </input>
      </div>
    );
  }
}

//hsla(5, 80%, 72%, 1)
