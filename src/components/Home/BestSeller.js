import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import List from '../Product/List';

const Counter = ({
}) => {
    const products = useSelector((state) => state.products.productList);
    const bestSales = products.slice(0, 4);
    return (
        <>
            <section className="ftco-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-3 pb-3">
                        <div className="col-md-12 heading-section text-center">
                            <h2 className="mb-4">Best Sellers</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                </div>
                {bestSales.length > 0 && <List products={bestSales} />}
            </section>
        </>
    );
}

export default Counter;