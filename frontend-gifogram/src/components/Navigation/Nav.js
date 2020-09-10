import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';



const Nav = () => {

    return (
        <div>
        <h1 className="shadow-pop-tr">
            Gifogram
        </h1>
        <NavLink
            to="/home"
        >Home  </NavLink>
        <NavLink
            to="/posts"
        >Posts</NavLink>
        </div>
    )

}

export default Nav;