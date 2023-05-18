const CartItem = ({ item, handleRemoveFromCart, handleUpdateCartItem }) => {
  return (
    <div className="cart-item" id={`${item.id}`}>
      <img src={item.image} alt={item.name} />
      <p>{item.name}</p>
      <p>{item.price}</p>
      <label htmlFor={item.in_cart}>Quantity: </label>
      <input
        type="number"
        id={item.in_cart}
        min="1"
        max={item.quantity}
        value={item.in_cart}
        onChange={(e) => {
          const newQuantity = parseInt(e.target.value);
          handleUpdateCartItem(item.id, newQuantity);
        }}
      />
      <button onClick={handleRemoveFromCart}>X</button>
    </div>
  );
};

export default CartItem;
