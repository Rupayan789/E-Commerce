import React from 'react';
import { connect }  from 'react-redux'
import { setCurrentUser }  from "./redux/user/user.action";
import { Switch , Route , Redirect } from "react-router-dom";
import HomePage from "./pages/homepage/homepage.component";
import Shoppage from "./pages/shop/shop.page";
import Header from './components/header/header'
import CheckoutPage from './pages/checkoutpage/checkout.component'
import './App.css';
import SignPage from './pages/signinandsignupPage.jsx/signinandsignup.component';
import { auth ,createUserProfileDocument} from './firebase/firebase.utils';
import { selectCurrentUser } from './redux/selector/user-items.selector';
import { createStructuredSelector}  from 'reselect'

class App extends React.Component{
  
  unsubcribeFromAuth=null;
  componentDidMount(){
    const { currentUser}=this.props
    this.unsubcribeFromAuth=auth.onAuthStateChanged(async userAuth=>{
      if(userAuth)
      {
        const userRef=await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot=>{
          // console.log(snapShot);
         setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
          })
        })
      }
      // console.log(currentUser);
      setCurrentUser(
        userAuth
      )
      // addCollectionAndDocuments('collections',collectionsArray.map(({title,items})=>({title,items})));

    })
  }
  componentWillUnmount(){
    this.unsubcribeFromAuth();
  }
  render()
  {
    
    return (
    <div className="App">
    <Header />
    <Switch>
      <Route path='/shop' component={Shoppage}/>
      <Route exact path='/checkout' component={CheckoutPage}/>
      <Route exact path='/signin' render={()=>this.props.currentUser?(<Redirect to='/'/>):(<SignPage/>)} />
      <Route path='/' component={ HomePage } />
    </Switch>
    </div>

  );}
}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser
})

const mapDispatchToProps=dispatch=>({
  setCurrentUser:user=>dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
