import React from "react";
import {BrowserRouter, Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav>
                <Link to="/about">About</Link>
                <Link to= "/vans">Vans</Link>
            </nav>
        </header>
    )
}