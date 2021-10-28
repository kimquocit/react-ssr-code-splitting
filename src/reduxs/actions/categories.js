import * as Types from '../../constants/ActionTypes';

export const getCategoriesRequest = () => ({
    type: Types.GET_CATEGORIES_REQUEST
});

export const getCategoriesSuccess = items => ({
    type: Types.GET_CATEGORIES_SUCCESS,
    payload: items
});