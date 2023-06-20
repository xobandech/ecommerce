import React from "react";
const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartItem }) => {
  return (
<>
    <td className="product">
    <div className="cart-item-image">
          <img src={item.image} alt={item.name} />
        </div>
    </td>
    <td className="col-desc">
          <p>{item.name}</p>
    </td>
    <td className="col-price">
       <p>{(Math.floor((item.price * 1.2) * 10) / 10).toFixed(2)}</p>
    </td>
    <td className="col-qty">
          <input
            type="number"
            id={item.in_cart}
            min="1"
            max={item.quantity}
            value={item.in_cart}
            onChange={async (e) => {
              const newQuantity = parseInt(e.target.value);
              handleUpdateCartItem(item.id, newQuantity);
            }}
          />
         <button onClick={handleRemoveFromCart}>X</button>
    </td>
    <td className="col-subtotal">
         {(Math.floor((item.price*item.in_cart * 1.2) * 10) / 10).toFixed(2)}
    </td>
    </>
  );
};

export default CartItem;
