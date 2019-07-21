import React from 'react'
import PreviewCollectionListItem from './PreviewCollectionListItem'
const PreviewCollectionList = ({collections}) => {
  return (
    <div className='PreviewCollectionList' style={{ marginTop: 20 }}>
      { collections.map(collection => <PreviewCollectionListItem key={collection.id} collection={collection} />) }
    </div>
  );
}
 
export default PreviewCollectionList;