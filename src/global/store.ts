import { createStore } from '@stencil/store';
import { Theme } from '../interfaces/Theme';

const { state } = createStore({
  theme: Theme.dark,
  zoom: 62
});

export default state;
