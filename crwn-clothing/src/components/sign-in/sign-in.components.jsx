import React, { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.components';
import CustomButton from '../custom-button/custom-button.components';
import { signInWithGoogle } from '../firebase/firebase.utils';


class SignIn extends Component {
    constructor(props) {
        super(props);


        this.state = {
            email: '',
            password: ''
        }
    }


    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ email: '', password: '' })
    }
    changeHandle = (event) => {
        const { value, name } = event.target; // lấy ra value và name của thẻ
        this.setState({ [name]: value }) //set state này hđ ví dụng name là email sẽ set value = value của thẻ,tương tự password cũng vậy
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account </h2>
                <span>Sign in with your email and password </span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email"
                        type="email"
                        handleChange={this.changeHandle}
                        label="Email"
                        value={this.state.email}
                        required />
                    <FormInput
                        name="password"
                        type="password"
                        handleChange={this.changeHandle}
                        label="Pass Word"
                        value={this.state.password}
                        required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGooleSignIn>
                            Sign in with Google
                         </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn