import React from "react";
import { NavLink } from "react-router-dom";
import css from "./NavMenu.module.css";
const NavMenu = () => {
  return (
    <header className={css.header}>
      <nav>
        <NavLink to="/" className={css.link}>
          Shop
        </NavLink>

        <NavLink to="/shopping" className={css.link}>
          Shopping Cart
        </NavLink>
        <NavLink to="/history" className={css.link}>
          History
        </NavLink>
        <NavLink to="/coupons" className={css.link}>
          Coupons
        </NavLink>
      </nav>
    </header>
  );
};

export default NavMenu;
