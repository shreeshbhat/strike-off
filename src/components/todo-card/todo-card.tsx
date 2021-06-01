import { Component, Host, Prop, Event, EventEmitter, h } from '@stencil/core';
import { Todo } from '../../interfaces/Todo';

@Component({
  tag: 'so-todo-card',
  styleUrl: 'todo-card.css',
  shadow: false,
})
export class TodoCard {
  @Prop() list: Todo[] = [];
  @Prop() header: string;
  @Prop() allowDelete: boolean;
  @Event() itemCheck!: EventEmitter;
  @Event() itemRemove!: EventEmitter;

  render() {
    return (
      <Host>
        <h3 class="header">{this.header}</h3>
        <div class="card">
          {this.list.map(item => (
            <so-todo-item
              key={item.todoId}
              class={item.new? null: "show"}
              allowDelete={this.allowDelete}
              checked={item.checked}
              text={item.text}
              todoId={item.todoId} />
          ))}
          {this.list.length == 0 ?
            <div class="todo-item">
              <div class="wrapper">
                <p class="empty-text label">All done!</p>
              </div>
            </div>
            : null
          }
        </div>
      </Host>
    );
  }

}
