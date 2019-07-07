import React from 'react';

const Navbar = ({totalCounters}) =>{ 
    return ( 
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <h1 className="navbar-brand">Navbar</h1>
            <span className="badge badge-pill badge-primary">{totalCounters}</span>
        </nav>
        );
}
 
export default Navbar;