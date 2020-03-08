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
    const links = [
      {
        url: '/',
        name: 'Home'
      },
      {
        url: '/preferences/',
        name: 'Preferences'
      }
    ];
    return (
      <Host>
        <aside>
          <nav>
          {links.map((link) =>
            <div class="item">
              <stencil-route-link
                class="link-wrapper"
                url={link.url}
                onClick={() => this.urlChanged()}>
                {link.name}
              </stencil-route-link>
            </div>
          )}
          <div class="item link-layout">
            <a class="social-link"
              href="https://github.com/shreeshbhat/strike-off"
              target="_blank"
              rel="noopener">
                Github
              </a>
            {/* <ion-icon name="logo-github" class="social-icon"></ion-icon> */}
          </div>

          <div class="item link-layout">
            <a class="social-link"
                href="https://twitter.com/shreeshbhat"
                target="_blank"
                rel="noopener">
                  Twitter
            </a>
            {/* <ion-icon name="logo-twitter" class="social-icon"></ion-icon> */}
          </div>
          </nav>
        </aside>
      </Host>
    );
  }
}

