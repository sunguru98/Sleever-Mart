import React from 'react'
import '../styles/AuthPage.scss'
import SignIn from '../components/SignIn'

const AuthPage = (props) => {
  return (
    <div className='AuthPage'>
      <SignIn />
    </div>
  )
}
 
export default AuthPage;