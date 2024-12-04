import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/Shop-Context-Provider";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import "./cart.css";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cartTtile">Your Cart Items</div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
      <div className="checkout">
        <p>Subtotal: ${totalAmount.toFixed(2)}</p>
        <button onClick={() => navigate("/")}>Continue Shopping</button>
        {totalAmount > 0 && <button>Checkout</button>}
      </div>
    </div>
  );
};

export default Cart;
