import React from 'react'
import '../styles/CustomButton.scss'
const CustomButton = ({ children, googleBtn, inverted, ...otherProps }) => {
  return (
    <button onClick={otherProps.onClick} className={`${inverted ? 'inverted' : '' } ${ googleBtn ? 'google-btn' : '' } CustomButton`} {...otherProps}>
      {children}
    </button>
  );
}
 
export default CustomButton