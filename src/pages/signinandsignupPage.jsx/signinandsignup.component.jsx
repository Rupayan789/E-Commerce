import React from 'react';
import SignIn from '../../components/Signin/signin.component'
import Signup from '../../components/signup/signup.component';
import './signinandsignup.styles.scss'
const SignPage=()=>(
    <div className='sign-in-and-sign-up'>
    <SignIn />
    <Signup/>
  </div>
);
export default SignPage;