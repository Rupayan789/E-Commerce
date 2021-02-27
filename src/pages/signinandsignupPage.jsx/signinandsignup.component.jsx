import React from 'react';
import SignIn from '../../components/Signin/signin.component'
import Signup from '../../components/signup/signup.component';
import { SignInAndSignUpContainer } from './sign-in-and-sign-up.styles';

const SignPage = () => (
  <SignInAndSignUpContainer>
    <SignIn />
    <Signup />
  </SignInAndSignUpContainer>
);

export default SignPage;