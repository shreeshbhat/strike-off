import { Component, State, h, Host } from '@stencil/core';
import { Todo } from '../../interfaces/Todo';
import { addTodo, getTodos, updateTodo, deleteTodo } from '../../utils/service';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true
})
export class AppHome {
  @State() list: Todo[] = [];

  componentWillLoad() {
    getTodos().then(val => {
      if (!!val)
        this.list = val as Todo[];
    });
  }

  inputSubmitHandler = (e: CustomEvent) => {
    const item = {
      todoId: this.updateCounter(),
      text: e.detail,
      checked: false
    };
    this.list = [...this.list, item];
    addTodo(item);
  };

  itemCheckedHandler = (e: CustomEvent) => {
    const list = [...this.list];
    const index = this.list.findIndex(x => x.todoId === e.detail);
    const item = list[index];
    list[index] = Object.assign({}, item, { checked: !item.checked });
    this.list = list;
    updateTodo(list[index]);
  };

  itemRemoveHandler = (e: CustomEvent) => {
    const index = this.list.findIndex(x => x.todoId === e.detail);
    deleteTodo(this.list[index]);
    this.list = [
      ...this.list.slice(0, index),
      ...this.list.slice(index + 1)
    ];
  };

  updateCounter(): number {
    const listLength = this.list.length;
    return listLength > 0 ? this.list[listLength - 1].todoId + 1 : 0;
  }

  render() {
    return (
      <Host>
        <so-create-todo onInputSubmit={this.inputSubmitHandler} />
        <div class="card-layout">
          <ion-card class="card">
            {this.list.map(item => (
              <so-todo-item
                onItemCheck={this.itemCheckedHandler}
                onItemRemove={this.itemRemoveHandler}
                checked={item.checked}
                text={item.text}
                todoId={item.todoId}
              />
            ))}
          </ion-card>
        </div>
      </Host>
    );
  }
}
