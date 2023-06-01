import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button from "../Button/Button";
import { FormContainer, PaymentFormContainer } from "./payment-form-styling";
const StripePaymentForm = () => {
    const stripe = useStripe()
    const elements = useElements()

    const paymentHandler = async (e) => {
        e.preventDefault();
        if (!stripe || !elements) return;
        
    }
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Payment with card:</h2>
        <CardElement />
        <Button>Submit payment</Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default StripePaymentForm;
