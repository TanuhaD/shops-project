import React from "react";
import { NavLink } from "react-router-dom";
import css from "./NavMenu.module.css";
const NavMenu = () => {
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={css.headerShop}>
          Shop
        </NavLink>

        <NavLink to="/shopping" className={css.headerCart}>
          Shopping Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default NavMenu;
