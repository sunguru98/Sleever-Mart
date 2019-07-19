import React from 'react'
import '../styles/CustomButton.scss'
const CustomButton = ({ children, ...otherProps }) => {
  return (
    <button className='CustomButton' {...otherProps}>
      {children}
    </button>
  );
}
 
export default CustomButton