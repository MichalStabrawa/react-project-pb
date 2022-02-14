import React from "react";
import "./Header.css";

const Header = () => {
    return (
        <header className="header-main">
            <nav className="navbar navbar-light bg-primary">
                <div className="container-fluid">
                    <span className="navbar-text">
                        Navbar text with an inline element
                    </span>
                </div>
            </nav>
        </header>
    );
};

export default Header;
