import { Component, Prop } from "@stencil/core";
import { MatchResults } from "@stencil/router";

@Component({
  tag: "app-profile",
  styleUrl: "app-profile.css",
  shadow: true
})
export class AppProfile {
  @Prop() match: MatchResults;

  normalize(name: string): string {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return "";
  }

  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <h2> Hello! </h2>
          <h3>
            Strike off is a fast progressive web app using Web Components.
          </h3>
          <p>
            Strike off uses StencilJS, which combines the best concepts of the
            most popular frontend frameworks into a compile-time rather than
            run-time tool.
          </p>
          <p>
            Stencil takes TypeScript, JSX, a tiny virtual DOM layer, efficient
            one-way data binding, an asynchronous rendering pipeline (similar to
            React Fiber), and lazy-loading out of the box, and generates 100%
            standards-based Web Components that run in any browser supporting
            the Custom Elements v1 spec.
          </p>
        </div>
      );
    }
  }
}

//hsla(5, 80%, 72%, 1)
