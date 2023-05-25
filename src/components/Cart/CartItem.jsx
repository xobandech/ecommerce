
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
       <p>{item.price}</p>
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
         {item.price*item.in_cart}
    </td>
    </>
  );
};

export default CartItem;
