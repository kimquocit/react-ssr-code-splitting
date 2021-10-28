import * as actions from './products';
import * as Types from '../../constants/ActionTypes';

describe('ACTIONS', () => {
  it('has a type of GET PRODUCTS REQUEST ACTION', () => {
    const expectedAction = {
      type: Types.GET_PRODUCTS_REQUEST
    }
    expect(actions.getProductsRequest()).toEqual(expectedAction)
  })

  it('has a type of GET PRODUCTS SUCCESS ACTION', () => {
    const expectedAction = {
      type: Types.GET_PRODUCTS_SUCCESS
    }
    expect(actions.getProductsSuccess()).toEqual(expectedAction)
  })

  it('has a type of GET PRODUCT DETAIL REQUEST ACTION', () => {
    const expectedAction = {
      type: Types.GET_PRODUCT_DETAIL_REQUEST
    }
    expect(actions.getProductDetailRequest()).toEqual(expectedAction)
  })
  
  it('has a type of GET PRODUCT DETAIL SUCCESS ACTION', () => {
    const expectedAction = {
      type: Types.GET_PRODUCT_DETAIL_SUCCESS
    }
    expect(actions.getProductDetailSuccess()).toEqual(expectedAction)
  })
})