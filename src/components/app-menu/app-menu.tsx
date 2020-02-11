import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: false
})
export class AppMenu {
  @Prop() theme: number;

  @Event() menuLinkClicked: EventEmitter;

  urlChanged() {
    if (window.innerWidth <= 510) {
      this.menuLinkClicked.emit();
    }
  }

  render() {
    return (
      <Host>
        <aside>
          <nav>
          <div class="item">
              <stencil-route-link
                class="link-wrapper"
                url="/"
                onClick={() => this.urlChanged()}>
                Home
              </stencil-route-link>
            </div>
            <div class="item">
              <stencil-route-link
                class="link-wrapper"
                url={"/themes/"}
                onClick={() => this.urlChanged()}>
                Themes
              </stencil-route-link>
            </div>
          </nav>
        </aside>
      </Host>
    );
  }
}

