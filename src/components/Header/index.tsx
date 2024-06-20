import React from "react";
import { Link } from "react-router-dom";
import './header.css'

function Header() {
    return(
        <header>
            <Link className="logo" to="/">Prime <span className="red">Flix</span></Link>
            <Link className="favoritos" to="/favoritos">Meus filmes</Link>
        </header>
    )
}

export default Header