import React from 'react'
import PreviewCollectionListItem from './PreviewCollectionListItem'
const PreviewCollectionList = ({collections}) => {
  return (
    <div className='PreviewCollectionList'>
      { collections.map(collection => <PreviewCollectionListItem key={collection.id} collection={collection} />) }
    </div>
  );
}
 
export default PreviewCollectionList;