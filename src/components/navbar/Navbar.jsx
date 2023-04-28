import { Link, NavLink } from "react-router-dom";

import "./Navbar.css";
import { CategoryMenu } from "./CategoryMenu";
import { CartWidget } from "../cart/CartWidget";

export const Navbar = () => {


  return (
    <div className="navbar">
      <Link className="nav-brand__link" to="/">
        <div className="nav-brand">
          <h1>D</h1>
          <h2>roger</h2>
          <h1>Z</h1>
        </div>
      </Link>
      <ul className="nav-menu">
        <NavLink
          className={(isActive) => (isActive ? "is_active" : "nav-menu__li")}
          to="/"
        >
          Home
        </NavLink>

        <CategoryMenu />

        {/*         <NavLink
          className={(isActive) => (isActive ? "is_active" : "nav-menu__li")}
          to="/addproduct"
        >
          Agregar
        </NavLink> */}
        <NavLink
          className={(isActive) => (isActive ? "is_active" : "nav-menu__li")}
          to="/contact"
        >
          Contact
        </NavLink>
      </ul>
      <div className="nav-panel">
        <Link className="nav-panel__li" to="/cart">
          <CartWidget />
        </Link>
      </div>
    </div>
  );
};
