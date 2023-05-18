import Checkout from "./Checkout";
import "./CartStyling.css"

const Cart = () => {  
  return (
    <div className="cart-page">
      <h1>Cart</h1>
      <Checkout />
    </div>
  );
};

export default Cart;