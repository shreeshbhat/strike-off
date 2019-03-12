import { Component, State } from '@stencil/core';
import { Todo } from '../../interfaces/Todo';


@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {
  @State() list: Todo[] = [ { index: new Date().toISOString(), text: 'Drink water', checked: false }];

  inputSubmitHandler = (e: CustomEvent) => {
    this.list = [...this.list, { index: new Date().toISOString(), text: e.detail, checked: false, }];
  }

  itemCheckedHandler = (e: CustomEvent) => {
    const list = [...this.list];
    const item = list[e.detail];
    list[e.detail] = Object.assign({}, item, { checked: !item.checked });
    this.list = list;
  }

  itemRemoveHandler = (e: CustomEvent) => {
    this.list = [...this.list.slice(0, e.detail), ...this.list.slice(e.detail + 1)];
  }

  render() {
    return (
      <div>
        <header>
          <h1>Strike off</h1>
        </header>

        <main>
          <so-create-todo onInputSubmit={this.inputSubmitHandler}>
          </so-create-todo>
          <div class="todo-list">
            {this.list.map((item) => (
              <so-todo-item
                onItemCheck={this.itemCheckedHandler}
                onItemRemove={this.itemRemoveHandler}
                checked={item.checked}
                text={item.text}
                index={item.index}
              />
            ))}
          </div>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
