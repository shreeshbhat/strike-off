[![Netlify Status](https://api.netlify.com/api/v1/badges/84a9cbe6-0868-44b7-a621-9b85c86731cc/deploy-status)](https://app.netlify.com/sites/strike-off/deploys)

# Strike off

Strike off is a progressive web app to manage your to-do items.

## Key features :

- Fast
- Simple
- Keyboard accessible
- Locally stored with no sync
- Can be installed as an application in iOS, Android, Linux, Mac, and Windows.

## Implementation notes : 

- [Stencil](https://stenciljs.com/) to generate Web Components.
- Components are pre-rendered during build time using [Stencil's config output](https://stenciljs.com/docs/static-site-generation#how-static-site-generation-and-prerendering-works). That's why the website loads very fast compared to client side rendered components.
- To-do items and preferences are stored in the browser using [IndexedDB](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API).
- Variable font is used to increase readability for dark mode by decreasing font weight.
- Zoom and theme preferences are updated dynamically using css variables.
- Buttons and links have hover and focus states.
- Colors have been selected to ensure WCAG AA compatibility for [color contrast](https://webaim.org/resources/contrastchecker/).
- Service worker is used to cache source files and assets to support offline usage.

### Getting started : 
Requires a recent LTS version of NodeJS and npm.

To install the dependencies, run :
```bash
npm install
```
To locally bring up the application, run :
```bash
npm start
```
To do a production build including prerender, run :
```bash
npm run prerender
```

## Contributing :

Thanks for your interest in contributing! 
Keep pull requests small.
Just a few related changes and nothing else.
Separate different features or changes into different PRs to make it easy to merge.
Have a feature request or find a bug? [Submit an issue](https://github.com/shreeshbhat/strike-off/issues).