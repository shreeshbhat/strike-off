import { Component, Host, h, State, Build } from '@stencil/core';
import { addToDB, getFromDB } from '../../utils/service';

@Component({
  tag: 'so-zoom',
  styleUrl: 'zoom.css',
  shadow: false,
})
export class Zoom {
  default = 62;
  @State() zoomValue;
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
    },
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
      this.updateHTML(this.zoomValue);
      addToDB('zoom', this.zoomValue);
    }
  }

  updateHTML(value: number) {
    const htmlEl: HTMLElement = document.getElementsByTagName('html')[0];
    htmlEl.style.fontSize = value + '%';
  }

  componentWillLoad() {
    if (Build.isBrowser) {
      getFromDB('zoom').then(val => {
        if (!!val) {
          this.zoomValue = val as number;
          this.updateHTML(this.zoomValue);
        } else {
          this.zoomValue = this.default;
        }
      });
    } else {
      this.zoomValue = this.default;
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
                    <input type="radio" name="zoom" class="n-radio" checked={this.zoomValue == option.value} onChange={ev => this.handleZoomChange(ev)} value={option.value} />
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
