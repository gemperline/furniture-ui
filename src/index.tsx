/**
 * index.tsx
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import * as React from 'react';
import * as ReactDOM from 'react-dom';

// Import root app
import { AppRoot } from './app/AppRoot';

const MOUNT_NODE = document.getElementById('root') as HTMLElement;

const render = (Component: typeof AppRoot) => {
  ReactDOM.render(<Component />, MOUNT_NODE);
};
 
if (module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./App', './locales/i18n'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    const ApplicationRoot = require('./App').AppRoot;
    render(ApplicationRoot);
  });
}

render(AppRoot);
