import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';

@Component({
  tag: 'so-button',
  styleUrl: 'button.css',
  shadow: false,
})
export class Button {
  @Prop() fill?: 'clear' | 'solid';
  @Event() buttonClick!: EventEmitter;

  handleOnClick = () => this.buttonClick.emit();

  render() {
    const classList = 'so-button ' + this.fill;
    return (
      <button class={classList} onClick={this.handleOnClick}>
        <slot></slot>
      </button>
    );
  }
}
