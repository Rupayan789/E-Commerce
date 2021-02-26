import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart.component'
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils'
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { createStructuredSelector} from 'reselect'
import {selectCurrentUser } from '../../redux/selector/user-items.selector'
import { selectHidden } from '../../redux/selector/cart-items.selector';
import {signOutStart } from '../../redux/user/user.action'
const Header = ({ currentUser , hidden ,signOutStart})=>(
    <div className="header">
    
        <Link className="logo-container" to='/'>
        <Logo className="logo"/>
        </Link>
  
    <div className="options">
        <Link className="option" to="/shop">Shop</Link>
        <Link className="option" to="/shop">Contact</Link>
        {
            currentUser?
            <div className="option" onClick={()=>signOutStart()}>Sign Out</div>
            :
            <Link className="option" to="/signin">Sign In</Link>
        }
        <CartIcon/>
    </div>
    {hidden? null:
    <CartDropdown/>}
    </div>
);
const mapStateToProps = createStructuredSelector({
    currentUser:selectCurrentUser,
    hidden:selectHidden
  });
const mapDispatchToProps=dispatch=>({
    signOutStart:()=>dispatch(signOutStart())
})
export default connect(mapStateToProps,mapDispatchToProps)(Header);