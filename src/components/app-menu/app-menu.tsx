import { Event, EventEmitter, Component, Host, Listen, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: false
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
        <aside>
          <nav>
            <ion-item>
              <ion-label>Dark Theme</ion-label>
              <ion-toggle checked={this.darkTheme}></ion-toggle>
            </ion-item>
          </nav>
        </aside>
      </Host>
    );
  }
}

