import { Component, Host, h } from '@stencil/core';
import { version } from '../../../package.json';

@Component({
  tag: 'app-about',
  styleUrl: 'app-about.css'
})
export class AppAbout {

  render() {
    return (
      <Host>
        <div class="about-wrapper">
          <div class="about-item ">
            <h2 id="preferences" tabindex="-1">About</h2>
          </div>
          <div class="about-item">
            <p>Strike off is a progressive web app to manage your to-do items.</p>
          </div>
          <div class="about-item">
            <h3>Key features</h3>
          </div>
          <div class="about-item">
            <ul>
              <li>Fast</li>
              <li>Simple to use</li>
              <li>Data is locally stored in the browser</li>
              <li>Can be installed as an application in iOS, Android, Linux, Mac, and Windows.</li>
            </ul>
          </div>

          <div class="about-item">
            <h3>Links</h3>
          </div>
          <div class="about-item ">
            <a class="contact-link" href="https://github.com/shreeshbhat/strike-off">
              View source code
            </a>
          </div>

          <div class="about-item ">
            <a class="contact-link" href="https://twitter.com/shreeshbhat">
              Twitter
            </a>
          </div>
          <div class="about-item">
            <h3>Version {version}</h3>
          </div>
        </div>
      </Host>
    );
  }

}
