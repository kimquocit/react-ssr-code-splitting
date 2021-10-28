import reducer from "./products";

describe('REDUCER', () => {

    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({ productList: [], productSelected: null })
    })

    it('should handle "GET_PRODUCTS_SUCCESS" action', () => {
        const mockData = [{
            "id": "1",
            "name": "name 1",
            "category": "1",
            "price": 20,
            "description": "description 1"
        }];
        expect(reducer({ productList: [], productSelected: null }, { type: "GET_PRODUCTS_SUCCESS", payload: mockData }))
            .toEqual({ productList: mockData, productSelected: null })
    })

    it('should handle "GET_PRODUCT_DETAIL_SUCCESS" action', () => {
        const mockData = {
            "id": "1",
            "name": "name 1",
            "category": "1",
            "price": 20,
            "description": "description 1"
        };
        expect(reducer({ productList: [], productSelected: null }, { type: "GET_PRODUCT_DETAIL_SUCCESS", payload: mockData }))
            .toEqual({ productList: [], productSelected: mockData })
    })

})