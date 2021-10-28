import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductsRequest } from '../reduxs/actions/products';
import Loadable from 'react-loadable';

const SubBanner = Loadable({
  loader: () => import('../components/Common/SubBanner'),
  loading: () => <div>loading...</div>
});

const List = Loadable({
  loader: () => import('../components/Product/List'),
  loading: () => <div>loading...</div>
});

class Category extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { products, getProducts } = this.props;
    if (!products.length) getProducts();
  }

  render() {
    const { products, location: { search } } = this.props;
    const query = new URLSearchParams(search);
    const id = query.get('id');
    //const id = props.match.params.id;
    const productList = products.length > 0 ? products.filter(p => p.category === id) : [];
    return (
      <>
        <SubBanner tittle={'COLLECTION PRODUCTS'} />
        <section className="ftco-section bg-light">
          {productList.length > 0 && <List products={productList} />}
        </section>
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.products.productList
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    getProducts: () => {
      dispatch(getProductsRequest());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Category);