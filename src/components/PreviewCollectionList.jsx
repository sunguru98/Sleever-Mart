import React from 'react'
import PreviewCollectionListItem from './PreviewCollectionListItem'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCollectionsCollections } from '../redux/selectors/collectionSelectors'

const PreviewCollectionList = ({ collections }) => {
  return (
    <div className='PreviewCollectionList' style={{ marginTop: 20 }}>
      { console.log(collections)}
      { Object.values(collections).map(collection => <PreviewCollectionListItem key={collection.id} collection={collection} />) }
    </div>
  );
}

const mapStateToProps = createStructuredSelector({ collections: selectCollectionsCollections })

export default connect(mapStateToProps)(PreviewCollectionList)