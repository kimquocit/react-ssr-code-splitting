import "regenerator-runtime/runtime";
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
   if (typeof (window) == 'undefined') global.window = new Object();

   const preloadedState = window.__PRELOADED_STATE__
   delete window.__PRELOADED_STATE__

   const store = createStore(
      reducer,
      preloadedState,
      composeWithDevTools(applyMiddleware(sagaMiddleware))
   );
   store.runSaga = sagaMiddleware.run;
   store.close = () => store.dispatch(END);

   return store;
}

export default configureStore;