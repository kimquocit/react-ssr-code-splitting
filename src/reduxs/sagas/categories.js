import { takeEvery, put, fork } from 'redux-saga/effects';
import * as actions from '../actions/categories';
import * as Types from '../../constants/ActionTypes';
import 'isomorphic-fetch';

function* getCategories() {
    try {
        const result = yield fetch('https://5cfdeea0ca949b00148d39c9.mockapi.io/api/categories')
            .then(res => {
                return res.text();
            }).then(data => {
                return JSON.parse(data);
            });
        yield put(actions.getCategoriesSuccess(result));
    } catch (error) {
        console.error(error);
    }
}

function* watchGetCategoriesRequest() {
    yield takeEvery(Types.GET_CATEGORIES_REQUEST, getCategories);
}

const categorySagas = [fork(watchGetCategoriesRequest)];

export default categorySagas;
