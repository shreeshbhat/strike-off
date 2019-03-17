import { Component, State, Listen, Prop } from "@stencil/core";
import { Todo } from "../../interfaces/Todo";

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

  @State() list: Todo[] = [
    { index: new Date().toISOString(), text: "Drink water", checked: false }
  ];

  inputSubmitHandler = (e: CustomEvent) => {
    this.list = [
      ...this.list,
      { index: new Date().toISOString(), text: e.detail, checked: false }
    ];
  };

  itemCheckedHandler = (e: CustomEvent) => {
    const list = [...this.list];
    const item = list[e.detail];
    list[e.detail] = Object.assign({}, item, { checked: !item.checked });
    this.list = list;
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
          <ion-card class="todo-list">
            {this.list.map(item => (
              <so-todo-item
                onItemCheck={this.itemCheckedHandler}
                onItemRemove={this.itemRemoveHandler}
                checked={item.checked}
                text={item.text}
                index={item.index}
              />
            ))}
          </ion-card>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/" component="app-home" exact={true} />
              <stencil-route url="/profile/:name" component="app-profile" />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
