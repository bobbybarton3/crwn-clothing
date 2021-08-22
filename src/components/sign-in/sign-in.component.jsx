import React from 'react'

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I ALREADY HAVE AN ACCOUNT</h2>
                <span>SIGN IN WITH YOUR EMAIL AND PASSWORD</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email' 
                    handleChange={this.handleChange}
                    value={this.state.email} 
                    label='Email'
                    required />

                    <FormInput 
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    handleChange={this.handleChange} 
                    label='Password'
                    required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign In with Google{' '}
                        </CustomButton>                    
                    </div>

                </form>
            </div>
        )
    }
}

export default SignIn;