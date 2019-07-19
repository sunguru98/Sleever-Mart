import React from 'react'
import '../styles/CustomButton.scss'
const CustomButton = ({ children, googleBtn, ...otherProps }) => {
  return (
    <button className={`${ googleBtn ? 'google-btn' : '' } CustomButton`} {...otherProps}>
      {children}
    </button>
  );
}
 
export default CustomButton