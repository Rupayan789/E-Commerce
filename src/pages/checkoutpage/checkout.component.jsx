
import React from 'react';

import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';

import { connect } from 'react-redux'
import { countTotal, selectCartItems } from '../../redux/selector/cart-items.selector'
import { createStructuredSelector } from 'reselect';
import  CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckOutButton from '../../components/stripeButton/stripeButton.component';

const CheckoutPage=({ cartItems, total})=>(
    <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {cartItems.map(cartItem => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <TotalContainer>TOTAL: ${total}</TotalContainer>
    <WarningContainer>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
    </WarningContainer>
    <StripeCheckOutButton price={total} />
  </CheckoutPageContainer>
    )

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:countTotal
})
export default connect(mapStateToProps)(CheckoutPage);