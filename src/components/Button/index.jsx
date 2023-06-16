import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButtonPrimary, StyledButtonSignup, StyledButtonBack, StyledButtonExit } from '../../styles/button';

const Button = ({ type, text, disabled, onClick, to, variant, preventDefault = false }) => {
  let ButtonComponent;

  switch (variant) {
    case 'primary':
      ButtonComponent = StyledButtonPrimary;
      break;
    case 'signup':
      ButtonComponent = StyledButtonSignup;
      break;
    case 'back':
      ButtonComponent = StyledButtonBack;
      break;
    case 'exit':
      ButtonComponent = StyledButtonExit;
      break;
    default:
      ButtonComponent = StyledButtonPrimary;
      break;
  }

  if (to) {
    return (
      <Link to={to} onClick={preventDefault ? (event) => event.preventDefault() : undefined}>
        <ButtonComponent type={type} disabled={disabled} onClick={onClick}>
          {text}
        </ButtonComponent>
      </Link>
    );
  }

  return (
    <ButtonComponent type={type} disabled={disabled} onClick={onClick}>
      {text}
    </ButtonComponent>
  );
};

export default Button;
