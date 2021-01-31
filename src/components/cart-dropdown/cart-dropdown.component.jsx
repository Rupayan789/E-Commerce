import React from 'react';
import { withRouter }  from 'react-router-dom'
import CustomButton from '../customButton/custombutton.component';
import './cart-dropdown.styles.scss';
import { connect } from "react-redux";
import { CartItem } from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/selector/cart-items.selector';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown=({ cartItems ,history,dispatch})=>(
    <div  className="cart-dropdown">
    <div className="cart-items">
    {
        cartItems.length?
        cartItems.map(cartItem=>
        <CartItem key={cartItem.id} item={cartItem}/>)
        :
        <span className="empty-message">Your Cart is empty</span>
    }
    </div>
    <CustomButton onClick={()=>{
        dispatch(toggleCartHidden())
        history.push('./checkout')}}>GO TO CHECKOUT</CustomButton>

    </div>
)

const mapStateToProps=state=>({
    cartItems:selectCartItems(state)

})
export default withRouter(connect(mapStateToProps)(CartDropdown));