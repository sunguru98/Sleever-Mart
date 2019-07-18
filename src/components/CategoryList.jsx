import React from 'react'
import CategoryListItem from './CategoryListItem'
import '../styles/CategoryList.scss'

const CategoryList = ({ categories }) => {
  return (
    <div className='CategoryList'>
      { categories.map(category => <CategoryListItem key={category.id} category={category} />) }
    </div>
  )
}

export default CategoryList