import React from 'react'
import CategoryList from '../components/CategoryList'

// Redux
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCategoriesCategories } from '../redux/selectors/categorySelectors'

// Styles
import { HomePageContainer } from '../jsStyles/HomePageStyles'

const HomePage = ({ categories }) => {
  return (
    <HomePageContainer>
      <CategoryList categories={categories} />
    </HomePageContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  categories: selectCategoriesCategories
})
export default connect(mapStateToProps)(HomePage)