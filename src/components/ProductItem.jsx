import React from 'react'
import '../styles/ProductItem.scss'

const ProductItem = ({ item }) => {
  return (
    <div className='ProductItem'>
      <div className='ProductItem__image' style={{ backgroundImage: `url(${item.imageUrl})` }}/>
      <div className='ProductItem__details'>
        <span className='ProductItem__details--name'>{item.name}</span>
        <span className='ProductItem__details--price'>{item.price}</span>
      </div>
    </div>
  );
}
 
export default ProductItem;