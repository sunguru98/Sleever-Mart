import React from 'react'
import PreviewCollectionList from '../components/PreviewCollectionList'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsCollections } from '../redux/selectors/collectionSelectors' 

const ShopPage = ({ collections }) => {
  return (
    <div className='ShopPage'>
      <h1 className='ShopPage__title'>Collections</h1>
      <PreviewCollectionList collections={collections} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({ collections: selectCollectionsCollections })

export default connect(mapStateToProps)(ShopPage)