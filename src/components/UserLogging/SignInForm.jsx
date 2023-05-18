import { useState, useContext } from "react"
import FormInput from "../FormInput/FormInput"
import Button from "../Button/Button"
import "./sign-in-form-styling.scss"
import { signInAuthUserWithEmailAndPassword } from "../../utils/firebase"
import { signUpWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase"
import { UserContext } from "../Contexts/UserContext"
import { ProductsContext } from "../Contexts/ProductsProviderComponent"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../../utils/firebase"
const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const { setCurrentUser } = useContext(UserContext)
    const { setCartItems } = useContext(ProductsContext)
    const signInWithGoogle = async () => {
        const { user } = await signInWithGooglePopup()
        setCurrentUser(user)
        await createUserDocumentFromAuth(user);
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
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            setFormFields(defaultFormFields)
            setCurrentUser(user)
            console.log(user);
            const docRef = await createUserDocumentFromAuth(user);
            const docSnap = await getDoc(docRef)
            const data = await docSnap.data()
            setCartItems(data.cartItems)
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <div className="sign-in-container">
            <h1>Sign in</h1>
            <h2>Already have an account?</h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label="Email" type="email" required name="email" onChange={handleChange} value={email}/>

                <FormInput label="Password" type="text" required name="password" onChange={handleChange} value={password}/>

            <div className="buttons-container">
                <Button type="submit">Sign in</Button>
                <Button onClick={signInWithGoogle} buttonType='google'>GOOGLE SIGN IN</Button>

            </div>

            </form>
        </div>
    )
}

export default SignInForm