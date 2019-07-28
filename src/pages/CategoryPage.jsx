import React from 'react'
import { connect } from 'react-redux'
import ProductItem from '../components/ProductItem'
import { selectParticularCategoryInCollections } from '../redux/selectors/collectionSelectors'
import '../styles/CategoryPage.scss'

const CategoryPage = ({ match, category }) => {
  return (
    <div className='CategoryPage'>
      <h2 className='CategoryPage__title'>{match.params.categoryId.toUpperCase()} </h2>
      <div className='CategoryPage__items'>
        { category.items.map(item => <ProductItem isCategory className='CategoryPage__item' key={item.id} item={item} />) }
      </div>
    </div>
  )
}

const mapStateToProps = (state, otherProps) => ({
  category: selectParticularCategoryInCollections(otherProps.match.params.categoryId)(state)
})

export default connect(mapStateToProps)(CategoryPage)