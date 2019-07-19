import React, { Component } from 'react'
import FormInputComponent from './FormInputComponent'
import CustomButton from './CustomButton'
import '../styles/Signin.scss'
import { signInWithGoogle } from '../firebase.config';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({ email: '', password: '' })
  }

  render() { 
    return (
      <div className='SignIn'>
        <h2 className='SignIn__title'>I already have an account</h2>
        <span className='SignIn__message'>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInputComponent label='Email' onChange={this.handleChange} type='email' name='email' value={this.state.email} required />
          <FormInputComponent label='Password' onChange={this.handleChange} type='password' name='password' value={this.state.password} required />
          <div className='SignIn__buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton googleBtn onClick={signInWithGoogle}>Sign in With Google</CustomButton>
          </div>
        </form>
      </div> 
    )
  }
}
 
export default SignIn;