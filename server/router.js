import React from 'react';
import express from "express";
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import Loadable from 'react-loadable';
import renderer from './server-renderer';
import configureStore from '../src/reduxs';
import rootSaga from '../src/reduxs/sagas';
import App from '../src/App';

const path = require("path");
const router = express.Router();

const renderApp = (req, res, next) => {
  const store = configureStore();
  const routerContext = {};
  const modules = [];
  const rootComponent = (
    <Loadable.Capture report={m => modules.push(m)}>
      <Provider store={store}>
        <StaticRouter location={req.url} context={routerContext}>
          <App />
        </StaticRouter>
      </Provider>
    </Loadable.Capture>
  )

  store.runSaga(rootSaga).toPromise().then(() => {
    const body = renderToString(rootComponent);
    renderer(req, res, store, body);
  }).catch((e) => {
    console.log(e.message)
    res.status(500).send(e.message)
  })

  renderToString(rootComponent);

  store.close();
};

router.get('/', renderApp);

router.use(express.static(
  path.resolve(__dirname, '..', 'build'),
  { maxAge: '30d' },
));

router.get('*', renderApp);

export default router;
