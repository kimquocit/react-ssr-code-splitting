import React from 'react';

const Intro = ({
}) => {
    return (
        <>
            <section className="ftco-section ftco-choose ftco-no-pb ftco-no-pt">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 d-flex align-items-stretch">
                            <div className="img" style={{ backgroundImage: `url(${require("../../assets/images/about-1.jpg").default})` }}></div>
                        </div>
                        <div className="col-md-4 py-md-5">
                            <div className="text py-3 py-md-5">
                                <h2 className="mb-4">New Women's Clothing Summer Collection 2019</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p><a href="#" className="btn btn-white px-4 py-3">Shop now</a></p>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-5 order-md-last d-flex align-items-stretch">
                            <div className="img img-2" style={{ backgroundImage: `url(${require("../../assets/images/about-2.jpg")})` }}></div>
                        </div>
                        <div className="col-md-7 py-3 py-md-5">
                            <div className="text text-2 py-md-5">
                                <h2 className="mb-4">New Men's Clothing Summer Collection 2019</h2>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                <p><a href="#" className="btn btn-white px-4 py-3">Shop now</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Intro;