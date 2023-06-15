import React from "react";

const ProductCard = ({ name, price, image, id, handleAddToCart }) => {
  return (
    <div className="product-card" id={id}>
      <div className="product-image">
        <img src={image} alt={name} key={id} />
      </div>
      <div className="product-info">
        <h4>{name}</h4>
        <div className="product-price">
          <p>{price}</p>
          <button onClick={handleAddToCart}>To cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
