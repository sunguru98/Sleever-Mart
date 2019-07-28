import React from 'react'
import StripeCheckout from 'react-stripe-checkout'
import { withRouter } from 'react-router-dom'

const StripeButton = ({ price, history }) => {
  const priceInCents = price * 100,
        publicKey = `pk_test_OYSJDEeRAq5ILOViWYJqAKnF00WytL73ed`,
        onPaymentProcess = token => history.push('/')
  return (
    <StripeCheckout 
      className='CheckoutPage__paybtn'
      label='Pay now' // General message
      name='Sleever Mart' // Company name
      billingAddress // Include billing address form
      image='https://svgshare.com/i/CUz.svg' // Company logo
      description={`Yout total price is ${price}`} // Include description of the payment
      amount={priceInCents} // Since stripe accepts payments in cents, we pass here like this
      panelLabel='Pay' // Pay button name
      token={onPaymentProcess} // Callback after clicking pay, we receive the secret token which is needed to be sent to backend
      stripeKey={publicKey} // Stripe public key is required
    />
  )
}
 
export default withRouter(StripeButton)