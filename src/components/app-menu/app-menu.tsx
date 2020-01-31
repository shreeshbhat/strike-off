import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: false
})
export class AppMenu {
  @Prop() theme: number;

  render() {
    return (
      <Host>
        <aside>
          <nav>
          <div class="item">
              <stencil-route-link
                class="link-wrapper"
                url="/">
                Home
              </stencil-route-link>
            </div>
            <div class="item">
              <stencil-route-link
                class="link-wrapper"
                url={"/themes/"}>
                Themes
              </stencil-route-link>
            </div>
          </nav>
        </aside>
      </Host>
    );
  }
}

