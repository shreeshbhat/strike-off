import { Component, Host, h, State } from '@stencil/core';
import { debounce } from 'ts-debounce';

@Component({
  tag: 'so-zoom',
  styleUrl: 'zoom.css',
  shadow: false,
})
export class Zoom {
  @State() zoomValue = 62;
  minValue = 50;
  maxValue = 90;
  stepValue = 5;

  handleDecreaseButtonClick() {
    this.changeZoomValue(this.zoomValue - this.stepValue);
  }

  handleIncreaseButtonClick() {
    this.changeZoomValue(this.zoomValue + this.stepValue);
  }

  handleInputChange(event: any) {
    this.changeZoomValue(Number(event.target.value));
  }

  changeZoomValue(value: number) {
    if (value > this.minValue - this.stepValue && value < this.maxValue + this.stepValue) {
      this.zoomValue = value;
      const htmlEl: HTMLElement = document.getElementsByTagName('html')[0];
      htmlEl.style.fontSize = this.zoomValue + '%';
    }
  }

  render() {
    return (
      <Host>
        <div class="accessibility-wrapper">
          <label class="text-zoom-label" htmlFor="text-zoom">
            Zoom
          </label>
          <div class="range-wrapper">
            <so-clear-button
              class="decrease-button"
              onButtonClick={() => {
                const debouncedFunction = debounce(this.handleDecreaseButtonClick.bind(this), 500);
                debouncedFunction();
              }}
            >
              A
            </so-clear-button>
            <input
              type="range"
              id="text-zoom"
              name="text-zoom"
              class="text-zoom"
              step={this.stepValue}
              min={this.minValue}
              max={this.maxValue}
              value={this.zoomValue}
              onChange={event => this.handleInputChange(event)}
            />
            <so-clear-button
              class="increase-button"
              onButtonClick={() => {
                const debouncedFunction = debounce(this.handleIncreaseButtonClick.bind(this), 500);
                debouncedFunction();
              }}
            >
              A
            </so-clear-button>
          </div>
        </div>
      </Host>
    );
  }
}
