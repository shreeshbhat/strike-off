import { Component } from '@stencil/core';

@Component({
  tag: 'kd-create-task',
  styleUrl: 'kd-create-task.css',
  shadow: true
})
export class KdCreateTask {

  render() {
    return (
      <div class="kd-create-task-wrapper">
        <input class="kd-create-task">
        </input>
      </div>
    );
  }
}

//hsla(5, 80%, 72%, 1)
