import { Build, Component, Host, State, h } from '@stencil/core';
import { createAnimation, Animation } from '@ionic/core';
import { Todo } from '../../interfaces/Todo';
import { addTodo, getTodos, updateTodo, deleteTodo } from '../../utils/service';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: false,
})
export class AppHome {
  @State() list: Todo[] = [];

  componentWillLoad() {
    if (Build.isBrowser) {
      getTodos().then(val => {
        if (!!val) this.list = val as Todo[];
      });
    }
  }

  componentDidLoad() {
    setTimeout(()=> {
      let homeEl = document.getElementById('home');
      homeEl.focus();
    },100);
  }

  inputSubmitHandler = (e: CustomEvent) => {
    const item = {
      todoId: this.updateCounter(),
      text: e.detail,
      checked: false,
      new: true
    };
    this.list = [...this.list, item];
    addTodo(item);


    setTimeout(() => {
      const animation: Animation =
        createAnimation()
          .addElement(document.querySelector('so-todo-item:last-child'))
          .duration(300)
          .fromTo('height', '0', '100%')
          .fromTo('opacity', '0', '1');
      animation.play();
      this.list[this.list.length - 1].new = false;
      updateTodo(this.list[this.list.length - 1]);
      this.list = [...this.list];
    }, 100);
  };

  itemCheckedHandler = (e: CustomEvent) => {
    const list = [...this.list];
    const index = this.list.findIndex(x => x.todoId === e.detail);
    let item = list[index];
    list[index] = Object.assign({}, item, { checked: !item.checked });
    this.list = list;
    updateTodo(list[index]);
  };

  itemRemoveHandler = (e: CustomEvent) => {
    const index = this.list.findIndex(x => x.todoId === e.detail);
    deleteTodo(this.list[index]);
    this.list = [...this.list.slice(0, index), ...this.list.slice(index + 1)];
  };

  updateCounter(): number {
    const listLength = this.list.length;
    return listLength > 0 ? this.list[listLength - 1].todoId + 1 : 0;
  }

  filterCheckedItems(list: Todo[], filterChecked: boolean): Todo[] {
    return list.filter(item => item.checked == filterChecked);
  }

  render() {
    return (
      <Host>
        <h2 id="home" class="visually-hidden" tabindex="-1">Home</h2>
        <so-create-todo onInputSubmit={this.inputSubmitHandler} />
          {!!this.list && this.list.length > 0 ? (
            <div class="card-layout">
              <so-todo-card
                header={'To be done'}
                list={this.filterCheckedItems(this.list, false)}
                allowDelete={false}
                onItemCheck={this.itemCheckedHandler}
                onItemRemove={this.itemRemoveHandler}
              />

              <so-todo-card
                header={'Completed'}
                list={this.filterCheckedItems(this.list, true)}
                allowDelete={true}
                displayEmptyCard={true}
                onItemCheck={this.itemCheckedHandler}
                onItemRemove={this.itemRemoveHandler}
              />
            </div>
          ) : (
            null
          )}

      </Host>
    );
  }
}
