import { Link, Outlet } from "react-router-dom";
import "./NavBarStyling.scss";
import { UserContext } from "../Contexts/UserContext";
import React, { useContext , useEffect} from "react";
import { CartItemsContext } from "../Contexts/CartItemsContext";
import { signOutUser, createUserDocumentFromAuth } from "../../utils/firebase";
import { getDoc } from "firebase/firestore";
import { Product } from "../Contexts/ProductsContext";
const NavigationBar = () => {
  const { setCurrentUser, currentUser } = useContext(UserContext);
  const context = useContext(CartItemsContext);
  const { setCartItems } = context;
  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
    localStorage.clear();
    setCartItems([])
  };

  useEffect(() => {
    try {
      const retrieveUser = async () => {
        const loggedInUser = localStorage.getItem('user');
        if (loggedInUser) {
          const foundUser = JSON.parse(loggedInUser);
          setCurrentUser(foundUser);
          const docRef = await createUserDocumentFromAuth(foundUser);
          const docSnap = await getDoc(docRef);
          const data = docSnap.data() as {cartItems: Product[]};
          const cartItems = [...data.cartItems];
          setCartItems(cartItems);
        }
      };
      retrieveUser();
    } catch (e) {
      console.log(e);
    }
  }, []);
  

  return (
        <div className="container">
          <div className="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/products">Products</Link>
            <Link to="/cart">Cart</Link>
            {currentUser ? (
              <a
                onClick={signOutHandler}
                className="sign-out-button sign"
                href="#"
              >
                Sign Out
              </a>
            ) : (
              <Link to="/auth" className="sign">
                Sign In Page
              </Link>
            )}
          </div>
          <Outlet />
        </div>
  );
};

export default NavigationBar;
