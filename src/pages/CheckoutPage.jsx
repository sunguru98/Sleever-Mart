import React from 'react'
import '../styles/CheckoutPage.scss'
import CartCheckoutList from '../components/CartCheckOutList'
import StripeButton from '../components/StripeButton'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCartItemsPrice } from '../redux/selectors/cartSelectors.js'

const CheckoutPage = ({ cartTotalPrice }) => {
  return (
    <div className='CheckoutPage'>
      <div className='CheckoutPage__header'>
        <div className='CheckoutPage__header-block CheckoutPage__header-block--1'>
          <span>Product</span>
        </div>
        <div className='CheckoutPage__header-block CheckoutPage__header-block--2'>
          <span>Description</span>
        </div>
        <div className='CheckoutPage__header-block CheckoutPage__header-block--3'>
          <span>Quantity</span>
        </div>
        <div className='CheckoutPage__header-block CheckoutPage__header-block--4'>
          <span>Price</span>
        </div>
        <div className='CheckoutPage__header-block CheckoutPage__header-block--5'>
          <span>Remove</span>
        </div>
      </div>
      <CartCheckoutList />
      <div className='CheckoutPage__total'>Total: ${ cartTotalPrice }</div>
      <div className='CheckoutPage__payment-info'>*** USE 4242 4242 4242 4242 as card number and any future date as expiry ***</div>
      <StripeButton price={ cartTotalPrice }/>
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  cartTotalPrice: selectCartItemsPrice
})
 
export default connect(mapStateToProps)(CheckoutPage)