import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkoutItem.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import SCButton from "../stripe-button/stripe-button.component";

import "./checkout.scss";

function CheckoutPage({ cartItems, total }) {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Description</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}

      {cartItems.length ? (
        <div>
          <div className="total">
            <span>TOTAL: ${total}</span>
          </div>
          <div className="test-warning">
            Please use thefollowing credit card for payments
            <br/>
            *4242 4242 4242 4242* EXP-01/2020 CVV-123

          </div>
        
          <div className='button'>  <SCButton price={total} /></div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});
export default connect(mapStateToProps)(CheckoutPage);
