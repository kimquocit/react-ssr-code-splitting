import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductDetailRequest } from '../reduxs/actions/products';
import Loadable from 'react-loadable';

const SubBanner = Loadable({
  loader: () => import('../components/Common/SubBanner'),
  loading: () => <div>loading...</div>
});

const ProductDetail = Loadable({
  loader: () => import('../components/Product/ProductDetail'),
  loading: () => <div>loading...</div>
});

class Product extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { product, getProductDetail, location: { search } } = this.props;
    const query = new URLSearchParams(search);
    const id = query.get('id');

    if (!product || product.id !== id) getProductDetail(id);
  }

  render() {
    const { product } = this.props;
    return (
      <>
        <SubBanner tittle={'PRODUCT SINGLE'} />
        <section className="ftco-section bg-light">
          {product && <ProductDetail product={product} />}
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    product: state.products.productSelected
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getProductDetail: (id) => {
      dispatch(getProductDetailRequest(id));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);