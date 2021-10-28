import React from 'react';
import { Link } from 'react-router-dom';

const List = ({
  products
}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {products.length > 0 && products.map((item, key) => {
            return (
              <div key={key} className="col-sm-6 col-md-6 col-lg-3">
                <div className="product">
                  <Link className="img-prod" to={`/product?id=${item.id}`}>
                    <img className="img-fluid" src={require("../../assets/images/product-1.jpg").default} alt="Colorlib Template" />
                    <span className="status">30%</span>
                    <div className="overlay"></div>
                  </Link>
                  <div className="text py-3 px-3">
                    {/* <h3><Link to={`/product/${item.id}`}>{item.name}</Link></h3> */}
                    <h3><Link to={`/product?id=${item.id}`}>{item.name}</Link></h3>
                    <div className="d-flex">
                      <div className="pricing">
                        <p className="price"><span className="price-sale">{`$${item.price}`}</span></p>
                      </div>
                    </div>
                    <p className="bottom-area d-flex px-3">
                      <a href="#" className="add-to-cart text-center py-2 mr-1"><span>Add to cart <i
                        className="ion-ios-add ml-1"></i></span></a>
                      <a href="#" className="buy-now text-center py-2">Buy now<span><i
                        className="ion-ios-cart ml-1"></i></span></a>
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  );
}

export default List;