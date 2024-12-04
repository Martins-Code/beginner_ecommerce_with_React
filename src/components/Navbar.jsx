import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "@phosphor-icons/react";
import { ShopContext } from "../context/Shop-Context-Provider"; // Import your context
import "./navbar.css";

const Navbar = () => {
  const { cartItems } = useContext(ShopContext);

  // Calculate total number of items in the cart
  const totalItems = Object.values(cartItems).reduce(
    (acc, curr) => acc + curr,
    0
  );

  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/cart" className="cart-icon">
          <ShoppingCart size={32} />
          {totalItems > 0 && <span className="badge">{totalItems}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
