import React from 'react'
import '../styles/ProductItem.scss'
import CustomButton from '../components/CustomButton'
import { addItemToCart } from '../redux/actions/cartActions'
import { connect } from 'react-redux'

const ProductItem = ({ item, addItemToCart, isCategory }) => {
  const handleClick = () => addItemToCart(item) 
  return (
    <div className='ProductItem' style={{ marginBottom: isCategory ? '30px' : null, width: isCategory ? '100%' : '22%' }}>
      <div className='ProductItem__image' style={{ backgroundImage: `url(${item.imageUrl})` }}/>
      <div className='ProductItem__details'>
        <span className='ProductItem__details--name'>{item.name}</span>
        <span className='ProductItem__details--price'>{item.price}$</span>
      </div>
      <CustomButton onClick={handleClick} inverted>Add to Cart</CustomButton>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  addItemToCart: itemObj => dispatch(addItemToCart(itemObj))
})

export default connect(null, mapDispatchToProps)(ProductItem)