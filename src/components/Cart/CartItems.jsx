import { useContext } from "react";
import CartItem from "./CartItem";
import { CartItemsContext } from "../Contexts/CartItemsContext";
import { db } from "../../utils/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { UserContext } from "../Contexts/UserContext";
const CartItems = () => {
  const context = useContext(CartItemsContext);
  const { currentUser } = useContext(UserContext);
  const { cartItems, setCartItems } = context;

  const handleRemoveFromCart = async (event) => {
    console.log(event.target.parentElement.parentElement.parentElement);
    const id = parseInt(
      event.target.parentElement.parentElement.parentElement.id
    );

    const updatedCartItems = cartItems.filter((item) => item.id !== id);
    await setCartItems(updatedCartItems);
    try {
      const UserDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(UserDocRef, { cartItems: updatedCartItems });
      console.log("Cart items updated in Firestore");
    } catch (error) {
      console.error("Error updating cart items in Firestore", error);
    }
  };
  const handleUpdateCartItem = async (id, newQuantity) => {
    const updatedCartItems = cartItems.map((item) =>
      item.id === id ? { ...item, in_cart: newQuantity } : item
    );
    await setCartItems(updatedCartItems);
    if (currentUser) {
      const UserDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(UserDocRef, { cartItems: updatedCartItems });
      console.log("Cart items updated in Firestore");
    }
  };
  return (
    <div className="cart-items">
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th className="col-item">
                <span>Product</span>
              </th>
              <th className="col-decs">
                <span>Description</span>
              </th>
              <th className="col-price">
                <span>Price</span>
              </th>
              <th className="col-quantity">
                <span>Quantity</span>
              </th>
              <th className="col-subtotal">
                <span>Subtotal</span>
              </th>
            </tr>
          </thead>
          {cartItems.map((item) => (
            <tbody key={item.id} id={item.id}>
              <tr className="item-info">
                <CartItem
                  item={item}
                  handleRemoveFromCart={handleRemoveFromCart}
                  handleUpdateCartItem={handleUpdateCartItem}
                />
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </div>
  );
};

export default CartItems;
