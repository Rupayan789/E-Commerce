import React,{useState} from 'react';
import FormInput from '../Form-Input/formInput.component';
import './signin.styles.scss';
import CustomButton from '../customButton/custombutton.component';
import { connect } from  'react-redux';
import { googleSignInStart , emailSignInStart} from '../../redux/user/user.action'
const SignIn = ({emailSignInStart,googleSignInStart})=> {
    
    const [userCredentails,setCredentials]= useState({email:'',password:''})
    const {email,password}=userCredentails;
    const handleSubmit=async event=>{
        event.preventDefault();
       
        emailSignInStart(email,password);
        
        
    }
    const handleChange=(event)=>{
        const { name ,value}=event.target;
        setCredentials({
            ...userCredentails,
            [name]:value
        })
    }
   
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form className="Form" onSubmit={handleSubmit}>
                    <FormInput 
                    name="email" 
                    type="email" 
                    handleChange={handleChange}
                    value={email} 
                    label="email" required/>
                    <FormInput 
                    name="password" 
                    type="password" 
                    handleChange={handleChange}
                    value={password} 
                    label="password" required/>
                    <div className="buttons">
                    <CustomButton  type="submit">Sign In</CustomButton>
                    <CustomButton  type="button" onClick={googleSignInStart} isGoogleSignIn>Sign In with Google</CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
const mapDispatchToProps=dispatch=>({
    googleSignInStart:()=>dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=>dispatch(emailSignInStart({email,password}))
})
export default connect(null,mapDispatchToProps)(SignIn);