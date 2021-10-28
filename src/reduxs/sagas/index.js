import { all } from 'redux-saga/effects';
import categorySagas from './categories';
import productSagas from './products';

export default function* rootSaga() {
  yield all([...categorySagas, ...productSagas]);
}
