import styled, { css } from 'styled-components'
// React router
import { Link } from 'react-router-dom'

const NavBarLinkStyles = css`
  padding: 10px 15px; 
  cursor: pointer;
`

export const NavBarContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`

export const NavBarLogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  padding: 25px;
`

export const NavBarLinksContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const NavBarLinkRouter = styled(Link)`
  ${NavBarLinkStyles}
`

export const NavBarLinkDiv = styled.div`
  ${NavBarLinkStyles}
`