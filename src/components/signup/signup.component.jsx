import React,{useState} from 'react';
import { connect } from 'react-redux'
import { auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from '../Form-Input/formInput.component';
import CustomButton from '../customButton/custombutton.component';
import { signUpStart} from '../../redux/user/user.action'
import './signup.styles.scss'
const Signup = ({signUpStart}) => {
    const [userCredentails,setUserCredentials]=useState({
        displayName:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const {displayName,email,password,confirmPassword}=userCredentails;
    const handleSubmit=async event=>{
        event.preventDefault();
        
        if(password!==confirmPassword)
        {
            alert('Password Dont match')
            return;
        }
        signUpStart({displayName,email,password})
        
    }

    const handleChange=(event)=>{
        const { name, value}=event.target;
        setUserCredentials({
            ...userCredentails,
            [name]:value
        })

    }
        return (
            <div className="sign-up">
            <h2>I do not have a account</h2>
            <span>Sign up with Email and Password</span>
                <form className="sign-up-form" onSubmit={handleSubmit}>
                <FormInput 
                     type="text"
                     name="displayName"
                     value={displayName}
                     onChange={handleChange}
                     label="Display Name"
                     required/>

                <FormInput 
                     type="email"
                     name="email"
                     value={email}
                     onChange={handleChange}
                     label="Email"
                     required
                />
                <FormInput 
                     type="password"
                     name="password"
                     value={password}
                     onChange={handleChange}
                     label="Password"
                     required
                />
                <FormInput 
                     type="Password"
                     name="confirmPassword"
                     value={confirmPassword}
                     onChange={handleChange}
                     label="ConfirmPassword"
                     required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
                


                </form>
            </div>
        )
    }

const mapDispatchToProps=dispatch=>({
    signUpStart:userCredentials=>dispatch(signUpStart(userCredentials))
})
export default connect(null,mapDispatchToProps)(Signup);