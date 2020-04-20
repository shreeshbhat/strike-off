import { Component, Host, h, State } from '@stencil/core';

@Component({
  tag: 'so-zoom',
  styleUrl: 'zoom.css',
  shadow: false,
})
export class Zoom {
  default = 62;
  @State() zoomValue = this.default;
  options = [
    {
      value: 50,
      label: 80,
    },
    {
      value: 55,
      label: 90,
    },
    {
      value: 62,
      label: 100,
    },
    {
      value: 75,
      label: 110,
    },
    {
      value: 85,
      label: 120,
    }
  ];
  minValue = 50;
  maxValue = 90;
  stepValue = 5;

  handleZoomChange(event: any) {
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
        <div class="zoom-wrapper">
          <form>
            <fieldset>
              <legend class="radio-legend">Choose your zoom level</legend>
              {this.options.map(option => (
                <label class="radio-wrapper zoom-height">
                  <div class="radio-group zoom-group">
                    <input type="radio"
                        name="zoom"
                        class="n-radio"
                        onChange={ev => this.handleZoomChange(ev)}
                        value={option.value} />
                    <span class="zoom-label">{option.label} %</span>
                    </div>
                </label>
              ))}
            </fieldset>
          </form>
        </div>
      </Host>
    );
  }
}
