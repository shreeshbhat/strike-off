import { Component, Event, EventEmitter, h} from '@stencil/core';

@Component({
  tag: 'so-fill-button',
  styleUrl: 'fill-button.css',
  shadow: false
})
export class FillButton {
  @Event() buttonClick!: EventEmitter;

  handleOnClick = () => this.buttonClick.emit();

  render() {
    return (
      <button class="fill-button" onClick={this.handleOnClick}>
        <slot></slot>
      </button>
    );
  }
}
