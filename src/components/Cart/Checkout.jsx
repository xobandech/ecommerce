import { useContext } from "react";
import CartItems from "./CartItems";
import { ProductsContext } from "../Contexts/ProductsProviderComponent";

const Checkout = () => {
  const context = useContext(ProductsContext);
  const { cartItems } = context;
  console.log("Dasds");

  let finalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
        finalPrice += cartItems[i].price * cartItems[i].in_cart;
        console.log(cartItems[i].in_cart);
  }
  return (
    <>
      <CartItems />
      <div className="checkout">
        <p>Shipping: 3$</p>
        <p>Total with fees: {finalPrice * 1.2}</p>
      </div>
    </>
  );
};

export default Checkout;
