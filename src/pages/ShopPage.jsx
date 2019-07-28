import React from 'react'
import PreviewCollectionList from '../components/PreviewCollectionList'

const ShopPage = ({ match }) => {
  return (
    <div className='ShopPage'>
      <h1 className='ShopPage__title'>Collections</h1>
      <PreviewCollectionList />
    </div>
  )
}

export default ShopPage