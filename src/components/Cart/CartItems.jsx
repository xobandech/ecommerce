import { useContext } from "react";
import CartItem from "./CartItem";
import { ProductsContext } from "../Contexts/ProductsProviderComponent";
import { db } from "../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../Contexts/UserContext";
const CartItems = () => {
  const context = useContext(ProductsContext);
  const { currentUser } = useContext(UserContext)
  const { cartItems, setCartItems } = context;

  const handleRemoveFromCart = async (event) => {
    const id = parseInt(event.target.parentElement.id);
    const updatedCartItems = cartItems.filter(item => item.id !== id) 
    await setCartItems(updatedCartItems)
    try {
      const UserDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(UserDocRef, { cartItems: updatedCartItems });
      console.log("Cart items updated in Firestore");
    } catch (error) {
      console.error("Error updating cart items in Firestore", error);
    }
  }
  const handleUpdateCartItem = async (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
      item.id === id ? { ...item, in_cart: newQuantity } : item
    );
    await setCartItems(updatedCartItems);
  };
  return (
    <div className="cart-items">
      {cartItems.map((item) => (  
        <CartItem
          key={item.id}
          item={item}
          handleRemoveFromCart={handleRemoveFromCart}
          handleUpdateCartItem={handleUpdateCartItem}
        />
      ))}
    </div>
  );
};

export default CartItems