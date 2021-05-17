import { Component, Event, EventEmitter, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'app-menu',
  styleUrl: 'app-menu.css',
  shadow: false,
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
    const links = [
      {
        url: '/',
        name: 'Home',
      },
      {
        url: '/preferences',
        name: 'Preferences',
      },
      {
        url: '/about',
        name: 'About',
      }
    ];
    return (
      <Host>
        <aside>
          <nav>
            {links.map(link => (
              <div class="item">
                <stencil-route-link class="link-wrapper" url={link.url} onClick={() => this.urlChanged()}>
                  {link.name}
                </stencil-route-link>
              </div>
            ))}
          </nav>
        </aside>
      </Host>
    );
  }
}
