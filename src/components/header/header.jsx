import React from 'react';
import { connect } from "react-redux";

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart.component'


import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector} from 'reselect'
import {selectCurrentUser } from '../../redux/selector/user-items.selector'
import { selectHidden } from '../../redux/selector/cart-items.selector';
import {signOutStart } from '../../redux/user/user.action'
import { HeaderContainer, LogoContainer, OptionContainer, OptionLink } from './header.styles';
const Header = ({ currentUser , hidden ,signOutStart})=>(
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo className="logo"/>
        </LogoContainer>
  
    <OptionContainer>
        <OptionLink className="option" to="/shop">Shop</OptionLink>
        {
            currentUser?
            <OptionLink as='div' className="option" onClick={()=>signOutStart()}>Sign Out</OptionLink>
            :
            <OptionLink className="option" to="/signin">Sign In</OptionLink>
        }
        <CartIcon/>
    </OptionContainer>
    {hidden? null:
    <CartDropdown/>}
    </HeaderContainer>
);
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectHidden
  });
const mapDispatchToProps=dispatch=>({
    signOutStart:()=>dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);