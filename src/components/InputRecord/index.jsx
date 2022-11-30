import React from 'react'
import {InputContainer, InputText, IconContainer } from './styles';


const InputRecord = ({leftIcon, name, ...rest}) => {
  return (
    <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) : null}
      <InputText {...rest}/>
    </InputContainer>
  )
}
export { InputRecord };

