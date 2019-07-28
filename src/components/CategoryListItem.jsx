import React from 'react'
import '../styles/CategoryListItem.scss'
import { withRouter } from 'react-router-dom'

const CategoryListItem = ({ category, history }) => {
  const handleClick = () => history.push(`/shop/${category.title}`)
  return (
    <div className={`${category.cover ? 'large' : ''} CategoryListItem`} onClick={handleClick}>
      <div className='CategoryListItem__bgimg' style={{ backgroundImage: `url(${category.imageUrl})` }}></div>
      <div className='CategoryListItem__content'>
        <h1 className='CategoryListItem__content--title'>{category.title}</h1>
        <span className='CategoryListItem__content--subtitle'>SHOP NOW</span>
      </div>
    </div>
  )
}

export default withRouter(CategoryListItem)