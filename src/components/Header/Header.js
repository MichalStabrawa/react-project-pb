import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header-main">
            <nav className="navbar navbar-light bg-primary">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col">
                            <h1>ShoppingApp</h1>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
