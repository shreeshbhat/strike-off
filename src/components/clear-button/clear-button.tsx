import { Component, Event, EventEmitter, h } from '@stencil/core';

@Component({
  tag: 'so-clear-button',
  styleUrl: 'clear-button.css',
  shadow: false,
})
export class ClearButton {
  @Event() buttonClick!: EventEmitter;

  handleOnClick = () => this.buttonClick.emit();

  render() {
    return (
      <button class="clear-button" onClick={this.handleOnClick}>
        <slot></slot>
      </button>
    );
  }
}
