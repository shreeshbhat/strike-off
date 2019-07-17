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
          <ion-item>
              <stencil-route-link
                class="link-wrapper"
                url="/">
                Home
              </stencil-route-link>
            </ion-item>
            <ion-item>
              <stencil-route-link
                class="link-wrapper"
                url={"/themes/" + this.theme}>
                Themes
              </stencil-route-link>
            </ion-item>
          </nav>
        </aside>
      </Host>
    );
  }
}

