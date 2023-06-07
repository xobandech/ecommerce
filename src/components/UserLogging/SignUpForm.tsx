import React, { useContext, useState, ChangeEvent, FormEvent } from "react";
import FormInput from "../FormInput/FormInput";
import Button from "../Button/Button";
import "./sign-up-form-styling.scss";
import { signUpWithEmailAndPassword, signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase";
import { UserContext } from "../Contexts/UserContext";
import { getDoc } from "firebase/firestore";
interface FormFields {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const defaultFormFields: FormFields = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUpForm = () => {
  const { setCurrentUser } = useContext(UserContext);

  const logUserGooglePopup = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  const [formFields, setFormFields] = useState<FormFields>(defaultFormFields);
  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    try {
      const { user } = await signUpWithEmailAndPassword(email, password);
      const displayName = `${firstName} ${lastName}`;
      await createUserDocumentFromAuth(user, displayName);
      const docRef = await createUserDocumentFromAuth(user);
      const docSnap = await getDoc(docRef);
      localStorage.setItem('user', JSON.stringify(user));
      setFormFields(defaultFormFields);
      setCurrentUser(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="sign-up-container">
      <h1>Sign Up</h1>
      <h2>Don't have an account?</h2>
      <form onSubmit={handleSubmit}>
        <FormInput label="First Name" type="text" name="firstName" onChange={handleChange} value={firstName} />

        <FormInput label="Last Name" type="text" name="lastName" onChange={handleChange} value={lastName} />

        <FormInput label="Email" type="email" required name="email" onChange={handleChange} value={email} />

        <FormInput label="Password" type="text" required name="password" onChange={handleChange} value={password} />

        <FormInput label="Confirm Password" type="text" required name="confirmPassword" onChange={handleChange} value={confirmPassword} />
        
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
