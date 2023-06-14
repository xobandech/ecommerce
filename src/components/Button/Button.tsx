import './button-styling.scss'
import React from 'react';
/*
    Sign in button
    Sign in with google button
    To cart button 
    Delete frm cart button

*/

const BUTTON_TYPES = {
    'sign-in': 'sign-in',
    'google': 'google-sign-in',
    'to-cart': 'to-cart',
    'delete-from-cart': 'delete-from-cart',
    'checkout' : 'checkout',
}

type ButtonProps = {
    disabled: boolean;
    children: string;
    buttonType: string;
}

const Button = ({ disabled, children, buttonType, ...otherProps }: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
    return (
      <button disabled={disabled} className={`button-container ${BUTTON_TYPES[buttonType]}`} {...otherProps}>
        {children}
      </button>
    );
  };

export default Button