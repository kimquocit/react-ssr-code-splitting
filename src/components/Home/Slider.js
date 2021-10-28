import React from 'react';

const Slider = ({
}) => {
    return (
        <>
            <section id="home-section" className="hero">
                <div className="home-slider js-fullheight owl-carousel">
                    <div className="slider-item js-fullheight">
                        <div className="overlay"></div>
                        <div className="container-fluid p-0">
                            <div className="row d-md-flex no-gutters slider-text js-fullheight align-items-center justify-content-end" data-scrollax-parent="true">
                                <div className="one-third order-md-last img js-fullheight" style={{ backgroundImage: `url(${require("../../assets/images/bg_1.jpg").default})`, height: "750px" }}>
                                </div>
                                <div className="one-forth d-flex js-fullheight align-items-center" data-scrollax=" properties: { translateY: '70%' }">
                                    <div className="text">
                                        <span className="subheading">Winkel eCommerce Shop</span>
                                        <div className="horizontal">
                                            <h3 className="vr">Stablished Since 2000</h3>
                                            <h1 className="mb-4 mt-3">Catch Your Own <br /><span>Stylish &amp; Look</span></h1>
                                            <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country.</p>
                                            <p><a href="#" className="btn btn-primary px-5 py-3 mt-3">Discover Now</a></p>
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

export default Slider;