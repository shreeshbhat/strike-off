import "@ionic/core";
import { Component, State, Listen, Prop } from "@stencil/core";
import { Todo } from "../../interfaces/Todo";
import { setTodos, getTodos } from "../../utils/service";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  @Prop({ connect: "ion-toast-controller" })
  toastCtrl: HTMLIonToastControllerElement;

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

  @State() list: Todo[] = [];

  componentWillLoad() {
    getTodos().then(val => {
      if(!!val)
      this.list = val as Todo[];
    });
  }

  inputSubmitHandler = (e: CustomEvent) => {
    const item = {
      id: new Date().toISOString(),
      text: e.detail,
      checked: false
    };
    this.list = [...this.list, item];
    setTodos(this.list);
  };

  itemCheckedHandler = (e: CustomEvent) => {
    const list = [...this.list];
    const index = this.list.findIndex(x => x.id === e.detail);
    const item = list[index];
    list[index] = Object.assign({}, item, { checked: !item.checked });
    this.list = list;
    setTodos(list);
  };

  itemRemoveHandler = (e: CustomEvent) => {
    this.list = [
      ...this.list.slice(0, e.detail),
      ...this.list.slice(e.detail + 1)
    ];
  };

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
                  id={item.id}
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
