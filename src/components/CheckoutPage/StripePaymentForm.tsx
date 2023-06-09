import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../Button/Button";
import React, { useContext, useState } from "react";
import { FormContainer, PaymentFormContainer } from "./payment-form-styling";
import { UserContext } from "../Contexts/UserContext";
import { CartItemsContext } from "../Contexts/CartItemsContext";

const StripePaymentForm = () => {
  const { cartItems, setCartItems } = useContext(CartItemsContext);
  const stripe = useStripe();
  const elements = useElements();
  const [isSuccesfull, setIsSuccesful] = useState<boolean | string>("not completed");
  const [isDisabled, setIsDisabled] = useState(false);
  const { currentUser } = useContext(UserContext);

  let finalPrice = 0;
  for (let i = 0; i < cartItems.length; i++) {
    finalPrice += cartItems[i].price * cartItems[i].in_cart;
  }
  const amountInCents = Math.round(finalPrice * 100);
  const paymentHandler = async (e) => {
    setIsDisabled(true);
    e.preventDefault();
    if (!stripe || !elements) return;

    const response = await fetch("/.netlify/functions/create-payment", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount: amountInCents }),
    }).then((res) => res.json());
    const clientSecret = response.payment.client_secret;
    const paymentResult = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          name: currentUser.displayName,
          email: currentUser.email,
        },
      },
    });
    if (paymentResult.error) {
      setIsSuccesful(false);
    } else if (paymentResult.paymentIntent.status === "succeeded") {
      setIsSuccesful(true);
      setCartItems([]);
    }

    setIsDisabled(false);
  };

  return (
    <>
      {isSuccesfull === "not completed" ? (
        <PaymentFormContainer>
          <FormContainer onSubmit={paymentHandler}>
            <h2>Payment with card:</h2>
            <CardElement options={{
              style: {
                base: {
                  fontSize: '1.2em',
                  fontFamily: '"Open Sans", sans-serif',
                  "::placeholder": {
                    color: "#aab7c4",
                  },
                },
              },
            }} />
            <Button disabled={isDisabled} buttonType="default">Submit payment</Button>
            This works only with "netlify dev" for run
                         <p>For payments use test card:</p>
            <p>4242424242424242</p>
            <p>03/30</p>
            <p>333</p>
            <p>33333</p>
          </FormContainer>
        </PaymentFormContainer>
      ) : isSuccesfull ? (
        <h1>Succesful payment. Thank you!<br/> We will contact you as soon as possible</h1>
      ) : (
        <h1>Payment failed. Try again.</h1>
      )}
    </>
  );
};

export default StripePaymentForm;
