import React, { Component } from 'react'
// Form input and button components
import FormInputComponent from './FormInputComponent'
import CustomButton from './CustomButton'
// firebase googleSignIn, auth and createUser helper function
import { auth, createUserProfileDocument, signInWithGoogle } from '../firebase.config'
import '../styles/Register.scss'

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      cPassword: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  async handleSubmit (event) {
    event.preventDefault()
    if (this.state.password !== this.state.cPassword) {
      alert('Passwords doesnt match')
      return
    }
    try {
      // Register in firebase under auth. The user details are in the property 'user', hence destructured
      const { user } = await auth.createUserWithEmailAndPassword(this.state.email, this.state.password)
      await createUserProfileDocument(user, {displayName: this.state.displayName})
      this.setState({
        displayName: '',
        email: '',
        password: '',
        cPassword: ''
      })
    } catch (err) { console.error(err) }
  }

  render() { 
    return (
      <div className='Register'>
        <h2 className='Register__title'>I do not have an account</h2>
        <span>Sign up with your email and pasword</span>
        <form className='Register__form' onSubmit={this.handleSubmit}>
          <FormInputComponent label='Name' onChange={this.handleChange} type='text' name='displayName' value={this.state.displayName} required />
          <FormInputComponent label='Email' onChange={this.handleChange} type='email' name='email' value={this.state.email} required />
          <FormInputComponent label='Password' onChange={this.handleChange} type='password' name='password' value={this.state.password} required />
          <FormInputComponent label='Confirm Password' onChange={this.handleChange} type='password' name='cPassword' value={this.state.cPassword} required />
          <div className='Register__buttons'>
            <CustomButton type='submit'>Sign up</CustomButton>
            <CustomButton googleBtn onClick={signInWithGoogle}>Sign up with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}
 
export default Register;