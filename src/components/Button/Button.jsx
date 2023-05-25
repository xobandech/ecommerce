import './button-styling.scss'

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

const Button = ({ children, buttonType, ...otherProps }) => {
    return (
        <button className={`button-container ${BUTTON_TYPES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button