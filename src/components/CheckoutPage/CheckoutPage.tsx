import React, { useContext } from "react";
import { CartItemsContext } from "../Contexts/CartItemsContext";
import StripePaymentForm from "./StripePaymentForm";
const CheckoutPage = () => {

  const context = useContext(CartItemsContext);

  return (
      <StripePaymentForm/>      
    )
}

export default CheckoutPage