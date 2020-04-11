import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'so-preview-theme',
  styleUrl: 'preview-theme.css',
  shadow: false,
})
export class PreviewTheme {
  @Prop() sidebarBackground: string;
  @Prop() mainBackground: string;
  @Prop() cardBackground: string;

  getStyleObj(backgroundValue: string) {
    return {
      background: backgroundValue,
    };
  }

  render() {
    return (
      <Host>
        <div class="sidebar" style={this.getStyleObj(this.sidebarBackground)}></div>
        <div class="main flex-center" style={this.getStyleObj(this.mainBackground)}>
          <div class="preview-card" style={this.getStyleObj(this.cardBackground)}></div>
        </div>
      </Host>
    );
  }
}
