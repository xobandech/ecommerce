const ProductCard = ({ name, price, image, id, handleAddToCart}) => {


  return (
    <div className="product-card" id={id}>
      <img src={image} alt={name}  key={id} />
      <h4>{name}</h4>
      <div className="product-price">
        <p>{price}</p>
      <button onClick={handleAddToCart}>To cart</button>
      </div>
    </div>
  );
};

export default ProductCard;
