import { put, takeEvery } from 'redux-saga/effects';
import { getProducts, getProductDetail, watchGetProductsRequest, watchGetProductDetailRequest } from './products';
import * as Types from '../../constants/ActionTypes';

describe('SAGAS', () => {
    it('should dispatch action "GET_PRODUCTS_REQUEST" ', () => {
        const generator = watchGetProductsRequest();

        expect(generator.next().value).toEqual(takeEvery(Types.GET_PRODUCTS_REQUEST, getProducts));
        expect(generator.next().done).toBeTruthy();
    })

    it('should dispatch action "GET_PRODUCTS_SUCCESS" with result from fetch API', () => {
        const mockData = [{
            "id": "1",
            "name": "name 1",
            "category": "1",
            "price": 20,
            "description": "description 1"
        }];
        const generator = getProducts();
        generator.next();

        expect(generator.next(mockData).value)
            .toEqual(put({ type: Types.GET_PRODUCTS_SUCCESS, payload: mockData }));
        expect(generator.next().done).toBeTruthy();
    })

    it('should dispatch action "GET_PRODUCT_DETAIL_REQUEST" ', () => {
        const generator = watchGetProductDetailRequest();

        expect(generator.next().value).toEqual(takeEvery(Types.GET_PRODUCT_DETAIL_REQUEST, getProductDetail));
        expect(generator.next().done).toBeTruthy();
    })

    it('should dispatch action "GET_PRODUCT_DEATIL_SUCCESS" with result from fetch API', () => {
        const mockData = {
            "id": "1",
            "name": "name 1",
            "category": "1",
            "price": 20,
            "description": "description 1"
        };
        const generator = getProductDetail('1');
        generator.next();

        expect(generator.next(mockData).value)
            .toEqual(put({ type: Types.GET_PRODUCT_DETAIL_SUCCESS, payload: mockData }));
        expect(generator.next().done).toBeTruthy();
    })

})