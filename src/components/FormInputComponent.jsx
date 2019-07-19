import React from 'react'
import '../styles/FormInputComponent.scss'
const FormInputComponent = ({label, handleChange, ...otherProps}) => {
  return (
    <div className='FormInputComponent'>
      { label && <label className={`${otherProps.value.length ? 'shrink' : ''} FormInputComponent__label`}>{label}</label> }
      <input className='FormInputComponent__input' onChange={handleChange} {...otherProps} />
    </div>
  );
}
 
export default FormInputComponent;