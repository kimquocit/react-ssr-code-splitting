import React from 'react';

const List = ({
  listProduct
}) => {
  return (
    <>
      <div className="container">
        <div className="row">
          {listProduct.length > 0 && listProduct.map((item, key) => {
            return (
              <div key={key} className="col-sm-6 col-md-6 col-lg-3">
                <div className="product">
                  <a href="#" className="img-prod"><img className="img-fluid" src={require("../../assets/images/product-1.jpg")}
                    alt="Colorlib Template" />
                    <span className="status">30%</span>
                    <div className="overlay"></div>
                  </a>
                  <div className="text py-3 px-3">
                    <h3><a href="#">{item.name}</a></h3>
                    <div className="d-flex">
                      <div className="pricing">
                        <p className="price"><span className="mr-2 price-dc">{`$${item.price}`}</span></p>
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