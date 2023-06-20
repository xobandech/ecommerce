import React, { useContext } from "react";
import CartItems from "./CartItems";
import { CartItemsContext } from "../Contexts/CartItemsContext";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import "./CartStyling.scss"

const CartPage = () => {
  const context = useContext(CartItemsContext);
  const { cartItems } = context;

  let finalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
        finalPrice += cartItems[i].price * cartItems[i].in_cart;
  }
  return (
    <div className="cart-page">
    <h1>Cart</h1>
      <CartItems />
      <div className="checkout">
        <p>Shipping: 3$</p>
        <p>Total with fees: {(Math.floor((finalPrice * 1.2) * 10) / 10).toFixed(2) + '€'}</p> 
        {cartItems.length > 0 ? (<Link to="/cart/checkout" style={{textDecoration: `none` }}>
          <Button disabled={cartItems.length > 0} buttonType={'checkout'}>To checkout</Button>
          </Link>) : (null) }
      </div>
    </div>
  );
};

export default CartPage;
