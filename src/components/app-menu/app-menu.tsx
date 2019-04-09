
import { Event, EventEmitter, Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: true
})
export class AppMenu {
  @Event() darkThemeClick!: EventEmitter;
  handleOnDarkThemeClick = () => this.darkThemeClick.emit();

  render() {
    return (
      <Host>
        <header>
          <h1>Menu</h1>
        </header>
        <main>
          <ion-item>
            <ion-label>Dark Theme</ion-label>
            <ion-toggle onClick={this.handleOnDarkThemeClick}></ion-toggle>
          </ion-item>
        </main>
      </Host>
    );
  }
}

