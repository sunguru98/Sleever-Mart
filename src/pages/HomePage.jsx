import React from 'react'
import CategoryList from '../components/CategoryList'
import '../styles/HomePage.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCategoriesCategories } from '../redux/selectors/categorySelectors'


const HomePage = ({ categories }) => {
  return (
    <div className='Homepage'>
      <CategoryList categories={categories} />
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesCategories
})
export default connect(mapStateToProps)(HomePage)