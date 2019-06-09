import { Event, EventEmitter, Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-theme',
  styleUrl: 'app-theme.css',
  shadow: true
})
export class AppTheme {
  @Prop() darkTheme: boolean;
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
            <ion-toggle checked={this.darkTheme}></ion-toggle>
          </ion-item>
        </main>
      </Host>
    );
  }
}

