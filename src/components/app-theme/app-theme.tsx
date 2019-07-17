import { Event, EventEmitter, Component, Host, Prop, h, Listen } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-theme',
  styleUrl: 'app-theme.css',
  shadow: false
})
export class AppTheme {
  @Prop() match: MatchResults;
  @Event() themeClick!: EventEmitter;

  handleOnThemeClick = () => this.themeClick.emit();

  @Listen('ionChange')
  handleIonChange(e: CustomEvent) {
    const value = e.detail.checked? 1 : 2;
    this.themeClick.emit(value);
  }

  render() {
    const theme = Number(this.match.params.theme);
    return (
      <Host>
        <div class="theme-wrapper">
          <label>Dark Theme</label>
          <ion-toggle checked={theme == 1? true : false}></ion-toggle>
        </div>
      </Host>
    );
  }
}

