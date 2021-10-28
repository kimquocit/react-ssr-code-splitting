import * as Types from '../../constants/ActionTypes';

const initialState = {
    productList: [],
    productSelected: null
};

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_PRODUCTS_SUCCESS:
            state.productList = action.payload;
            return { ...state };
        case Types.GET_PRODUCT_DETAIL_SUCCESS:
            state.productSelected = action.payload;
            return { ...state };
        default:
            return state;
    }
}