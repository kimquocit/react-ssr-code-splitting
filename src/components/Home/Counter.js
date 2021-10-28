import React from 'react';

const Counter = ({
}) => {
    return (
        <>
            <section className="ftco-section ftco-counter img" id="section-counter" style={{ backgroundImage: `url(${require("../../assets/images/bg_4.jpg").default})` }}>
                <div className="container">
                    <div className="row justify-content-center py-5">
                        <div className="col-md-10">
                            <div className="row">
                                <div className="col-md-3 d-flex justify-content-center counter-wrap">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="10000">5423</strong>
                                            <span>Happy Customers</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="100">125</strong>
                                            <span>Branches</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="1000">3453</strong>
                                            <span>Partner</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3 d-flex justify-content-center counter-wrap">
                                    <div className="block-18 text-center">
                                        <div className="text">
                                            <strong className="number" data-number="100">347</strong>
                                            <span>Awards</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Counter;