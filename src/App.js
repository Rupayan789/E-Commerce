import React, { useEffect } from 'react';
import { connect }  from 'react-redux'

import { Switch , Route , Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shop.page";
import Header from './components/header/header'
import CheckoutPage from './pages/checkoutpage/checkout.component'
import './App.css';
import SignPage from './pages/signinandsignupPage.jsx/signinandsignup.component';
import { checkUserSession } from './redux/user/user.action'
import { selectCurrentUser } from './redux/selector/user-items.selector';
import { createStructuredSelector}  from 'reselect'
import { auth } from './firebase/firebase.utils';

const App = ({checkUserSession,currentUser}) => {
  useEffect(()=>{
    checkUserSession();
  },[checkUserSession])

    
    return (
    <div className="App">
    <Header />
    <Switch>
      <Route path='/shop' component={Shoppage}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
      <Route exact path='/signin' render={()=>currentUser?(<Redirect to='/'/>):(<SignPage/>)} />
      <Route path='/' component={ HomePage } />
    </Switch>
    </div>

  );}

const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})
const mapDispatchToProps=dispatch=>({
  checkUserSession:()=>dispatch(checkUserSession())
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
