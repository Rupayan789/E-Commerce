import React from 'react';
import { ReactComponent as ShoppingBag} from '../../assets/shopping-bag.svg'
import { connect }  from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions'
import './cart.styles.scss'
import { countSelectItems } from '../../redux/selector/cart-items.selector';
import { createStructuredSelector} from 'reselect'

const CartIcon=({toggleCartHidden,itemCount})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingBag className="shopping-icon"/>
        <span className="item-count">{itemCount}</span>
    </div>
)

const mapStateToProps=createStructuredSelector({
    itemCount:countSelectItems
})
const mapDispatchToProps=dispatch=>({
    toggleCartHidden:()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps,mapDispatchToProps)(CartIcon);