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
              <div class="radio-group">
                <input type="radio" name="theme"
                  class="n-radio" id="theme_1"
                  value="1"
                  checked={this.theme == Theme.dark? true : false}
                  onChange={ev => this.handleThemeChange(ev)}
                />
								<label htmlFor="theme_1">
									Dark
								</label>
							</div>
              <div class="radio-group">
                <input type="radio" name="theme"
                  class="n-radio" id="theme_2"
                  value="2"
                  checked={this.theme == Theme.light? true : false}
                  onChange={ev => this.handleThemeChange(ev)}
                  />
								<label htmlFor="theme_2">
                  Light
								</label>
							</div>
            </fieldset>
          </form>
        </div>
      </Host>
    );
  }
}

