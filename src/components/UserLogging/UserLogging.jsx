import SignUpForm from "./SignUpForm"
import SignInForm from "./SignInForm"
import './user-logging-styling.scss'
const UserLogging = () => {
    return (
        <div className="user-logging-container">
            <SignInForm />
            <SignUpForm />
        </div>
    )
}

export default UserLogging