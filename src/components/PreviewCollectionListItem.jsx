import React from 'react'
import '../styles/PreviewCollectionListItem.scss'
import ProductItem from './ProductItem'
import { Link, withRouter } from 'react-router-dom'
const PreviewCollectionListItem = ({ collection, match }) => {
  return (
    <div className='PreviewCollectionListItem'>
      <Link to={`${match.url}/${collection.routeName}`}>
        <h1 className='PreviewCollectionListItem__title'>{collection.title.toUpperCase()}</h1>
      </Link>
      <div className='PreviewCollectionListItem__products'>
        <ProductItem item={collection.items[0]}/>
        <ProductItem item={collection.items[1]}/>
        <ProductItem item={collection.items[2]}/>
        <ProductItem item={collection.items[3]}/>
      </div>
    </div>
  );
}
 
export default withRouter(PreviewCollectionListItem)