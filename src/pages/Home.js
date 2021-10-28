import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductsRequest } from '../reduxs/actions/products';
import Loadable from 'react-loadable';

const Slider = Loadable({
    loader: () => import('../components/Home/Slider'),
    loading: () => <div>loading...</div>
});

const BestSeller = Loadable({
    loader: () => import('../components/Home/BestSeller'),
    loading: () => <div>loading...</div>
});

const Intro = Loadable({
    loader: () => import('../components/Home/Intro'),
    loading: () => <div>loading...</div>
});

const Counter = Loadable({
    loader: () => import('../components/Home/Counter'),
    loading: () => <div>loading...</div>
});

const Newsletter = Loadable({
    loader: () => import('../components/Home/Newsletter'),
    loading: () => <div>loading...</div>
});

class Home extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        const { products, getProducts } = this.props;
        if (!products.length) getProducts();
    }

    render() {
        return (
            <>
                <Slider />
                <BestSeller />
                <Intro />
                <Counter />
                <Newsletter />
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

export default connect(mapStateToProps, mapDispatchToProps)(Home);