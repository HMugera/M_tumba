import React from "react";
import StripeCheckOut from "react-stripe-checkout";

const SCButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HaHQSKzpMALJHfq13xEIiGOb0rTxzHrT1ohyLML09YtyxcVc5yc74m66NL9pBWPvPfaSC3eh8e1fxgw76txAQLG00bUvTkobv";


    const onToken =token =>{
        console.log(token);
        alert('Payment Succesful')
    }
  return (
    <StripeCheckOut
      label="Pay Now"
      name="M-tumba"
      billingAddress
      shippingAdress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default SCButton;
