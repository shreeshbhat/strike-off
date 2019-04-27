
import { Event, EventEmitter, Component, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: true
})
export class AppMenu {
  @Prop() darkTheme: boolean;
  @Event() darkThemeClick!: EventEmitter;

  handleOnDarkThemeClick = () => this.darkThemeClick.emit();

  @Listen('ionChange')
  handleIonChange(e: CustomEvent) {
    // const toggle = e.target as HTMLIonToggleElement;
    this.darkThemeClick.emit(e.detail.checked);
  }

  render() {
    return (
      <Host>
        <header>
          <h1>Menu</h1>
        </header>
        <main>
          <ion-item>
            <ion-label>Dark Theme</ion-label>
            <ion-toggle checked={this.darkTheme}></ion-toggle>
          </ion-item>
        </main>
      </Host>
    );
  }
}

