// Core
import React from 'react'
import CartIcon from '../components/CartIcon'
import CartDropDown from '../components/CartDropDown'
// styles
import { NavBarContainer, NavBarLogoContainer, NavBarLinksContainer, NavBarLinkDiv, NavBarLinkRouter } from '../jsStyles/NavBarStyles'
// Assets
import { ReactComponent as CrownLogo } from '../assets/crown.svg'

// Redux specific methods
import { connect } from 'react-redux'
import { showCartDropdown } from '../redux/actions/cartActions'
import { createStructuredSelector } from 'reselect'
import { selectUsersUser } from '../redux/selectors/userSelectors'
import { signOut } from '../redux/actions/userActions'
import { selectCartDropDownHidden } from '../redux/selectors/cartSelectors'

// A standard way of receiving props is via the parent component
// But in redux, we acheive using a higher order component called connect,
// And a helper function called mapStateToProps.
// This mapStateToProps accepts a state object, that object is none other than the root reducer
// And root reducer is made visible to components via the Provider component attached in the index.js
// By this helper method, We can now access the reducer and passIn props directly, hence the name mapStateToProps

const NavBar = ({ user, isHidden, showCartDropdown, signOut }) => {
  const handleClick = () => { showCartDropdown(!isHidden) }
  return (
    <NavBarContainer>
      <NavBarLogoContainer to='/'>
        <CrownLogo className='NavBar__logo' />
      </NavBarLogoContainer>
      <NavBarLinksContainer>
        <NavBarLinkRouter to='/shop'>SHOP</NavBarLinkRouter>
        <NavBarLinkRouter to='/contact'>CONTACT</NavBarLinkRouter>

        { !user ? 
          <NavBarLinkRouter to='/auth'>SIGN IN</NavBarLinkRouter> : 
          <NavBarLinkDiv onClick={signOut} to='/auth'>SIGN OUT</NavBarLinkDiv>
        }
        <CartIcon onClick={handleClick} />
      </NavBarLinksContainer>
      { !isHidden && <CartDropDown /> }
    </NavBarContainer>
  )
}

// This function ensures the component what props should have what state.
// By returning an object, of the property name and value corresponding to the props and the specificReducer state respectively
const mapStateToProps = createStructuredSelector({
  user: selectUsersUser,
  isHidden: selectCartDropDownHidden
})

const mapDispatchToProps = dispatch => ({
  showCartDropdown: boolVal => dispatch(showCartDropdown(boolVal)),
  signOut: () => dispatch(signOut())
})

// connect is a Higher order component, which takes in two arguments
// mapStateToProps and mapDispatchToProps
// mapStateToProps takes in the rootReducer state and helps the components receive via a prop
// mapDispatchToProps takes in the dispatch as an argument and helps the components receive as a prop,
// So whenever dispatch is called, it triggers that particular action
export default connect(mapStateToProps, mapDispatchToProps)(NavBar)