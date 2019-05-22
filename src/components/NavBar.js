import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to='/'>
        Home
      </NavLink>
      <br/>
      <NavLink to="/actors" exact>
        Actors
      </NavLink>
      <br/>
      <NavLink to='/directors' exact>
        Directors
      </NavLink>
      <br/>
      <NavLink to="/movies" exact>
        Movies
      </NavLink>
    </div>
  );
};

export default NavBar;
