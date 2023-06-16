import React from 'react';
import { StyledInput, StyledLabel, InputContainer } from '../../styles/Input';

const Input = ({ register, label, id, type, placeholder, errors }) => (
  <InputContainer>
    <StyledLabel htmlFor={id}>{label}</StyledLabel>
    <StyledInput id={id} type={type} placeholder={placeholder} {...register(id)} />
    {errors[id] && <StyledLabel>{errors[id].message}</StyledLabel>}
  </InputContainer>
);

export default Input;