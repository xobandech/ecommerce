import { Link, Outlet } from "react-router-dom";
import "./NavBarStyling.scss";
import { UserContext } from "../Contexts/UserContext";
import ProductsProviderComponent from "../Contexts/ProductsProviderComponent";
import { useContext } from "react";
import { signOutUser } from "../../utils/firebase";
const NavigationBar = () => {
  const { setCurrentUser, currentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    const res = await signOutUser()
    setCurrentUser(null)
    console.log(res);
  }

  return (
    <>
      <ProductsProviderComponent>
        <div className="nav-bar">
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
          {currentUser ? (
            <a onClick={signOutHandler} className="sign-out-button">Sign Out</a>
          ) : (
            <Link to="/auth">Sign In Page</Link>
          )}
        </div>
        <Outlet />
      </ProductsProviderComponent>
    </>
  );
};

export default NavigationBar;
