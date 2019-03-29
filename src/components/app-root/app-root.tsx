import "@ionic/core";
import { Component, State, Listen, Prop } from "@stencil/core";
import { Todo } from "../../interfaces/Todo";
import { addTodo, getTodos, updateTodo, deleteTodo } from "../../utils/service";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  @State() list: Todo[] = [];
  @Prop({ connect: "ion-toast-controller" })
  toastCtrl!: HTMLIonToastControllerElement;

  @Listen("window:swUpdate")
  async onSWUpdate() {
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration || !registration.waiting) {
      // If there is no registration, this is the first service
      // worker to be installed. registration.waiting is the one
      // waiting to be activiated.
      return;
    }
    const toast = await this.toastCtrl.create({
      message: "New version available",
      showCloseButton: true,
      closeButtonText: "Reload"
    });
    await toast.present();
    await toast.onWillDismiss();
    registration.waiting.postMessage("skipWaiting");
    window.location.reload();
  }


  componentWillLoad() {
    getTodos().then(val => {
      if(!!val)
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
      <div>
        <header>
          <h1>Strike off</h1>
        </header>

        <main>
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
          {/* <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router> */}
        </main>
      </div>
    );
  }
}
