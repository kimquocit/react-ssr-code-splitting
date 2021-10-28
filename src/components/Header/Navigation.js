import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = ({
    categories
}) => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" to="/">Winkel</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span>Menu</button>

                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="#">Shop</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown04">
                                    {categories.length > 0 && categories.map((cat, key) => {
                                        return (
                                            <Link className="dropdown-item" to={`/category?id=${cat.id}`} key={key}>{cat.name}</Link>
                                        )
                                    })}
                                </div>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="/about">About</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/blog">Blog</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navigation;