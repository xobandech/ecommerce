import { useContext } from "react";
import { CartItemsContext } from "../Contexts/CartItemsContext";
import CartItems from "../Cart/CartItems";
import StripePaymentForm from "./StripePaymentForm";
const CheckoutPage = () => {

  const context = useContext(CartItemsContext);
  const { cartItems } = context;
  console.log("Dasds"); 

  let finalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
        finalPrice += cartItems[i].price * cartItems[i].in_cart;
        console.log(cartItems[i].in_cart);
  }     
  // TODO: ADD STRIPT OR ANOTHER PAY SYSTEM 
  return (
      <StripePaymentForm />      
    )
}

export default CheckoutPage