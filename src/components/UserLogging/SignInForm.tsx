import React, { useState, useContext } from "react"
import FormInput from "../FormInput/FormInput"
import Button from "../Button/Button"
import "./sign-in-form-styling.scss"
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase.js"
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase.js"
import { UserContext } from "../Contexts/UserContext"
import { CartItemsContext } from "../Contexts/CartItemsContext"
import {  getDoc } from "firebase/firestore"
import { Product } from "../Contexts/ProductsContext"
interface FormFields {
    email: string;
    password: string;
}

const defaultFormFields: FormFields = {
    email: '',
    password: '',   
}
  
const SignInForm = () => {
    const { setCurrentUser } = useContext(UserContext)
    const { setCartItems } = useContext(CartItemsContext)
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        setCurrentUser(user)
        const docRef = await createUserDocumentFromAuth(user);
        const docSnap = await getDoc(docRef)
        const data = await docSnap.data() as { cartItems: Product[] }
        localStorage.setItem('user', JSON.stringify(user)); // Convert user object to a string
        await setCartItems(data.cartItems)
    }

    const [formFields, setFormFields] = useState(defaultFormFields)
    const {email, password} = formFields
    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({ ...formFields, [name]: value })  
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const { user } = await signInAuthUserWithEmailAndPassword(email, password);
          setFormFields(defaultFormFields);
          setCurrentUser(user);
          console.log(user);
          localStorage.setItem('user', JSON.stringify(user)); // Convert user object to a string
          const docRef = await createUserDocumentFromAuth(user);
          const docSnap = await getDoc(docRef);
          const data = await docSnap.data() as { cartItems: Product[] };
          setCartItems(data.cartItems);
        } catch (error) {
          console.log(error);
        }
      };
      

    return (
        <div className="sign-in-container">
            <h1>Sign in</h1>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required name="email" onChange={handleChange} value={email}/>

                <FormInput label="Password" type="text" required name="password" onChange={handleChange} value={password}/>

            <div className="buttons-container">
                <Button disabled={false} buttonType="default" type="submit">Sign in</Button>
                <Button disabled={false} onClick={signInWithGoogle} buttonType='google'>GOOGLE SIGN IN</Button>
            </div>

            </form>
        </div>
    )
}

export default SignInForm