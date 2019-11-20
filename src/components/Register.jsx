import React, { Component } from 'react'
// Form input and button components
import FormInputComponent from './FormInputComponent'
import CustomButton from './CustomButton'
// firebase googleSignIn, auth and createUser helper function
import { connect } from 'react-redux'
import { signInGoogle, registerUser } from '../redux/actions/userActions'
import '../styles/Register.scss'

class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayName: '',
      email: '',
      password: '',
      cPassword: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  async handleSubmit(event) {
    const { registerUser } = this.props
    event.preventDefault()
    if (this.state.password !== this.state.cPassword) {
      alert('Passwords doesnt match')
      return
    }
    const response = await registerUser(this.state.email, this.state.password, this.state.displayName)
    console.log(response)
  }

  render() {
    const { signInGoogle } = this.props
    return (
      <div className='Register'>
        <h2 className='Register__title'>I do not have an account</h2>
        <span>Sign up with your email and pasword</span>
        <form className='Register__form' onSubmit={this.handleSubmit}>
          <FormInputComponent
            label='Name'
            onChange={this.handleChange}
            type='text'
            name='displayName'
            value={this.state.displayName}
            required
          />
          <FormInputComponent
            label='Email'
            onChange={this.handleChange}
            type='email'
            name='email'
            value={this.state.email}
            required
          />
          <FormInputComponent
            label='Password'
            onChange={this.handleChange}
            type='password'
            name='password'
            value={this.state.password}
            required
          />
          <FormInputComponent
            label='Confirm Password'
            onChange={this.handleChange}
            type='password'
            name='cPassword'
            value={this.state.cPassword}
            required
          />
          <div className='Register__buttons'>
            <CustomButton type='submit'>Sign up</CustomButton>
            <CustomButton type='button' googleBtn onClick={signInGoogle}>
              Sign up with Google
            </CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signInGoogle: () => dispatch(signInGoogle()),
  registerUser: (email, password, displayName) =>
    dispatch(registerUser(email, password, displayName))
})

export default connect(null, mapDispatchToProps)(Register)
