import React from 'react';

const SubBanner = ({
    tittle
}) => {
    return (
        <>
            <div className="hero-wrap hero-bread" style={{ backgroundImage: `url(${require("../../assets/images/bg_6.jpg").default})` }}>
                <div className="container">
                    <div className="row no-gutters slider-text align-items-center justify-content-center">
                        <div className="col-md-9 text-center">
                            <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home</a></span> <span>{tittle}</span></p>
                            <h1 className="mb-0 bread">{tittle}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SubBanner;