import 'ionicons';
import { Build, Component, Element, Host, Listen, Method, State, h } from '@stencil/core';
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

  showUpdate: boolean = false;

  @Listen('swUpdate', { target: 'window' })
  async onSWUpdate() {
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration || !registration.waiting) {
      // If there is no registration, this is the first service
      // worker to be installed. registration.waiting is the one
      // waiting to be activiated.
      this.showUpdate = false;
      return;
    }
    this.showUpdate = true;
  }

  @Method()
  async openMenu() {
    this.hideMenu = !this.hideMenu;
    const content = document.getElementById('content');
    content.classList.add('animation')
  }

  @Listen('menuLinkClicked')
  menuLinkClickedHandler() {
    this.openMenu();
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

  async update() {
    const registration = await navigator.serviceWorker.getRegistration();
    if (!registration || !registration.waiting) {
      // If there is no registration, this is the first service
      // worker to be installed. registration.waiting is the one
      // waiting to be activiated.
      return;
    }
    registration.waiting.postMessage('skipWaiting');
    window.location.reload();
    this.showUpdate = false;
  }

  componentWillLoad() {
    if (Build.isBrowser) {
      getFromDB('theme').then(val => {
        if (!!val)
          this.theme = val as number;
        this.setThemeClass(this.theme);
      });
    } else {
      this.theme = Theme.dark;
    }
  }

  render() {
    return (
      <Host>
        <header>
          <so-clear-button class="menu-button"
            onButtonClick={() => this.openMenu()}>
            <ion-icon name="menu-outline" class="menu-icon"></ion-icon>
          </so-clear-button>
          <h1>Strike off</h1>
          {this.showUpdate
            ? <so-clear-button class="update-button"
                onButtonClick={() => this.update()}>
              <ion-icon name="cloud-download-outline" class="menu-icon"></ion-icon>
              </so-clear-button>
            : <div></div>
          }
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
                <stencil-route url='/preferences/'
                  component='app-preferences'
                  componentProps={{ theme: this.theme }} />
              </stencil-route-switch>
            </stencil-router>
          </main>
        </div>
      </Host>
    );
  }
}
