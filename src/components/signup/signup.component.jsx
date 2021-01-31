import React from 'react';
import { auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import FormInput from '../Form-Input/formInput.component';
import CustomButton from '../customButton/custombutton.component';
import './signup.styles.scss'
class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
        }


    }
    handleSubmit=async event=>{
        event.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        if(password!==confirmPassword)
        {
            alert('Password Dont match')
            return;
        }
        try{
            const { user }=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDocument(user,{displayName});
            this.setState({
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
            })
        }
        catch(error)
        {
            console.error(error);
        }
        
    }

    handleChange=(event)=>{
        const { name, value}=event.target;
        this.setState({
            [name]:value
        })

    }
    render()
    {
        const {displayName,email,password,confirmPassword}=this.state;
        return (
            <div className="sign-up">
            <h2>I do not have a account</h2>
            <span>Sign up with Email and Password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                <FormInput 
                     type="text"
                     name="displayName"
                     value={displayName}
                     onChange={this.handleChange}
                     label="Display Name"
                     required/>

                <FormInput 
                     type="email"
                     name="email"
                     value={email}
                     onChange={this.handleChange}
                     label="Email"
                     required
                />
                <FormInput 
                     type="password"
                     name="password"
                     value={password}
                     onChange={this.handleChange}
                     label="Password"
                     required
                />
                <FormInput 
                     type="Password"
                     name="confirmPassword"
                     value={confirmPassword}
                     onChange={this.handleChange}
                     label="ConfirmPassword"
                     required
                />
                <CustomButton type="submit">Sign Up</CustomButton>
                


                </form>
            </div>
        )
    }
}
export default Signup;