import * as Types from '../../constants/ActionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case Types.GET_CATEGORIES_SUCCESS:
            state = action.payload;
            return state;
        default:
            return state;
    }
}