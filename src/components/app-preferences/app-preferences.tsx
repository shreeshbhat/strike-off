import { Event, EventEmitter, Component, Host, Prop, h, Listen } from '@stencil/core';
import { Theme } from '../../interfaces/Theme';

@Component({
  tag: 'app-preferences',
  styleUrl: 'app-preferences.css',
  shadow: false,
})
export class AppPreferences {
  @Event() themeClick!: EventEmitter;
  @Prop() theme: number;

  @Listen('onChange')
  handleThemeChange(e) {
    const value = Number(e.target.value);
    this.themeClick.emit(value);
  }

  componentDidLoad() {
    setTimeout(()=> {
      let homeEl = document.getElementById('preferences');
      homeEl.focus();
    },100);
  }

  render() {
    return (
      <Host>
        <div class="theme-wrapper">
          <div class="heading-wrapper">
            <h2 id="preferences" tabindex="-1">Preferences</h2>
          </div>
          <form>
            <fieldset>
              <legend class="radio-legend">Choose your theme</legend>
              <label class="radio-wrapper">
                <div class="radio-group">
                  <input type="radio" name="theme" class="n-radio" checked={this.theme == Theme.dark ? true : false} onChange={ev => this.handleThemeChange(ev)} value="1" />
                  <span class="radio-label">Dark</span>
                </div>
                <so-preview-theme sidebar-background="#a14545" main-background="#252527" card-background="#3b353b"></so-preview-theme>
              </label>

              <label class="radio-wrapper">
                <div class="radio-group">
                  <input
                    type="radio"
                    name="theme"
                    class="n-radio"
                    id="theme_2"
                    checked={this.theme == Theme.light ? true : false}
                    onChange={ev => this.handleThemeChange(ev)}
                    value="2"
                  />
                  <span class="radio-label">Light</span>
                </div>
                <so-preview-theme sidebar-background="#a14545" main-background="#f5f5f5" card-background="#fafafa"></so-preview-theme>
              </label>
            </fieldset>
          </form>
          <so-zoom></so-zoom>
        </div>
      </Host>
    );
  }
}
