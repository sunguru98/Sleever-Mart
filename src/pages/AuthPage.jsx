import React from 'react'
import '../styles/AuthPage.scss'
import SignIn from '../components/SignIn'
import Register from '../components/Register'

const AuthPage = props => {
  return (
    <div className='AuthPage'>
      <SignIn />
      <Register />
    </div>
  )
}
 
export default AuthPage;