import { Component, Event, EventEmitter, h} from '@stencil/core';

@Component({
  tag: 'so-clear-button',
  styleUrl: 'so-clear-button.css',
  shadow: true
})
export class SoClearButton {
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
