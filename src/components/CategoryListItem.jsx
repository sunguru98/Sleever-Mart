import React from 'react'
import '../styles/CategoryListItem.scss'

const CategoryListItem = ({ category }) => {
  return (
    <div className={`${category.cover ? 'large' : ''} CategoryListItem`}>
      <div className='CategoryListItem__bgimg' style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
      <div className='CategoryListItem__content'>
        <h1 className='CategoryListItem__content--title'>{category.title}</h1>
        <span className='CategoryListItem__content--subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default CategoryListItem