import React from 'react';
import PropTypes from 'prop-types';
import ReactDOMServer from 'react-dom/server';

// react-dates needs to be initialized before using any react-dates component
// https://github.com/airbnb/react-dates#initialize
// NOTE: Initializing it here will initialize it also for app.test.js
import 'react-dates/initialize';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter, StaticRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import routeConfiguration from './routeConfiguration';
import Routes from './Routes';
import LocalizationWrapper from './locale/LocalizationWrapper';

export const ClientApp = props => {
  const { store } = props;
  return (
    <Provider store={store}>
      <LocalizationWrapper>
        <HelmetProvider>
          <BrowserRouter>
            <Routes routes={routeConfiguration()} />
          </BrowserRouter>
        </HelmetProvider>
      </LocalizationWrapper>
    </Provider>
  );
};

const { any, string } = PropTypes;

ClientApp.propTypes = { store: any.isRequired };

export const ServerApp = props => {
  const { url, context, helmetContext, store } = props;
  HelmetProvider.canUseDOM = false;
  return (
    <Provider store={store}>
      <LocalizationWrapper>
        <HelmetProvider context={helmetContext}>
          <StaticRouter location={url} context={context}>
            <Routes routes={routeConfiguration()} />
          </StaticRouter>
        </HelmetProvider>
      </LocalizationWrapper>
    </Provider>
  );
};

ServerApp.propTypes = { url: string.isRequired, context: any.isRequired, store: any.isRequired };

/**
 * Render the given route.
 *
 * @param {String} url Path to render
 * @param {Object} serverContext Server rendering context from react-router
 *
 * @returns {Object} Object with keys:
 *  - {String} body: Rendered application body of the given route
 *  - {Object} head: Application head metadata from react-helmet
 */
export const renderApp = (url, serverContext, preloadedState) => {
  // Don't pass an SDK instance since we're only rendering the
  // component tree with the preloaded store state and components
  // shouldn't do any SDK calls in the (server) rendering lifecycle.
  const store = configureStore(preloadedState);

  const helmetContext = {};

  const body = ReactDOMServer.renderToString(
    <ServerApp url={url} context={serverContext} helmetContext={helmetContext} store={store} />
  );
  const { helmet: head } = helmetContext;
  return { head, body };
};
