
import React from 'react';

import './checkout.styles.scss'

import { connect } from 'react-redux'
import { countTotal, selectCartItems } from '../../redux/selector/cart-items.selector'
import { createStructuredSelector } from 'reselect';
import  CheckoutItem from '../../components/checkout-item/checkout-item.component'
import StripeCheckOutButton from '../../components/stripeButton/stripeButton.component';

const CheckoutPage=({ cartItems, total})=>(
    <div className="checkout-page">
        <div className="checkout-header">
            <div className="header-block">
                <span>PRODUCT</span>
            </div>
            <div className="header-block">
                <span>DESCRIPTION</span>
            </div>
            <div className="header-block">
                <span>QUANTITY</span>
            </div>
            <div className="header-block">
                <span>PRICE</span>
            </div>
            <div className="header-block">
                <span>REMOVE</span>
            </div>
        </div>
        {
            cartItems.map(item=>(
                <CheckoutItem cartItem={item} key={item.id}/>
            ))
        }
        <div className="total">
            <span >
                TOTAL:${total}
            </span>
        </div>
        <div className="test-warning">
            *Please use the following credit card details
            <br/>
            Card No-4242 4242 4242 4242 and CVV=123 and Date:01/2020
        </div>
        <StripeCheckOutButton price={total}/>
    </div>
    )

const mapStateToProps=createStructuredSelector({
    cartItems:selectCartItems,
    total:countTotal
})
export default connect(mapStateToProps)(CheckoutPage);