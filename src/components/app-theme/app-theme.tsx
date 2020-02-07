import { Event, EventEmitter, Component, Host, Prop, h, Listen } from '@stencil/core';
import { Theme } from '../../interfaces/Theme';

@Component({
  tag: 'app-theme',
  styleUrl: 'app-theme.css',
  shadow: false
})
export class AppTheme {
  @Event() themeClick!: EventEmitter;
  @Prop() theme: number;

  @Listen('onChange')
  handleThemeChange(e) {
    const value = Number(e.target.value);
    this.themeClick.emit(value);
  }

  render() {
    return (
      <Host>
        <div class="theme-wrapper">
          <form>
            <fieldset>
              <legend>
                Choose your theme
							</legend>
              <div class="radio-wrapper">
                <div class="radio-group">
                  <input type="radio" name="theme"
                    class="n-radio" id="theme_1"
                    checked={this.theme == Theme.dark ? true : false}
                    onChange={ev => this.handleThemeChange(ev)}
                    value="1"
                  />
                  <label htmlFor="theme_1">
                    Dark
                  </label>
                </div>
                <so-preview-theme
                  sidebar-background="#a14545"
                  main-background="#252527"
                  card-background="#3b353b"></so-preview-theme>
              </div>


              <div class="radio-wrapper">
                <div class="radio-group">
                  <input type="radio" name="theme"
                    class="n-radio" id="theme_2"
                    checked={this.theme == Theme.light ? true : false}
                    onChange={ev => this.handleThemeChange(ev)}
                    value="2"
                  />
                  <label htmlFor="theme_2">
                    Light
								</label>
                </div>
                <so-preview-theme
                  sidebar-background="#a14545"
                  main-background="#f5f5f5"
                  card-background="#fafafa"></so-preview-theme>
              </div>
            </fieldset>
          </form>
        </div>
      </Host>
    );
  }
}

