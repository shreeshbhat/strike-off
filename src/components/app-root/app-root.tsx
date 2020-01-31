import '@ionic/core';
import { Component, Element, Host, Listen, Method, Prop, State, h } from '@stencil/core';
import { addToDB, getFromDB } from '../../utils/service';
import { Theme } from '../../interfaces/Theme';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: false
})
export class AppRoot {
  @Element() el!: HTMLAppRootElement;
  @State() hideMenu: boolean = true;
  @State() theme: number = Theme.dark;
  @Prop({ connect: 'ion-toast-controller' })
  toastCtrl!: HTMLIonToastControllerElement;

  @Listen('swUpdate', { target: 'window' })
  async onSWUpdate() {
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration || !registration.waiting) {
      // If there is no registration, this is the first service
      // worker to be installed. registration.waiting is the one
      // waiting to be activiated.
      return;
    }
    const toast = await this.toastCtrl.create({
      message: 'New version available',
      showCloseButton: true,
      closeButtonText: 'Reload',
      position: 'top'
    });
    await toast.present();
    await toast.onWillDismiss();
    registration.waiting.postMessage('skipWaiting');
    window.location.reload();
  }

  @Method()
  async openMenu() {
    this.hideMenu = !this.hideMenu;
    const content = document.getElementById('content');
    content.classList.add('animation')
  }

  @Listen('themeClick')
  async changeTheme(event: CustomEvent) {
    this.theme = event.detail;
    addToDB('theme', this.theme);
    this.setThemeClass(this.theme);
  }

  private setThemeClass(value: number) {
    if (value === Theme.dark) {
      this.el.parentElement.classList.add('dark');
      this.el.parentElement.classList.remove('light');
    }
    else {
      this.el.parentElement.classList.add('light');
      this.el.parentElement.classList.remove('dark');
    }
  }

  componentWillLoad() {
    getFromDB('theme').then(val => {
      if (!!val)
        this.theme = val as number;
      this.setThemeClass(this.theme);
    });
  }

  render() {
    return (
      <Host>
        <header>
          <so-clear-button class="menu-button"
            onButtonClick={() => this.openMenu()}>
            <ion-icon name="menu" class="menu-icon"></ion-icon>
          </so-clear-button>
          <h1>Strike off</h1>
        </header>
        <div class="content" id="content">
          <app-menu
            class={this.hideMenu ? 'hide-menu' : 'show-menu'}
            theme={this.theme}
          />
          <main>
            <stencil-router>
              <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/'
                  component='app-home' exact={true} />
                <stencil-route url='/themes/'
                  component='app-theme'
                  componentProps={{ theme: this.theme }} />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </Host>
    );
  }
}
