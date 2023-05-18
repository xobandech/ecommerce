import React, { useState, useContext } from "react";
import ProductCard from "./ProductCard";
import { ProductsContext } from "../Contexts/ProductsProviderComponent";
import { updateDoc, doc } from "firebase/firestore";
import { UserContext } from "../Contexts/UserContext";
import { db } from "../../utils/firebase";
const ProductsPage = ({ products, productsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { currentUser } = useContext(UserContext);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(products.length / productsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const context = useContext(ProductsContext);
  const { cartItems, setCartItems } = context;

  return (
    <>
      <div className="products">
        {currentProducts.map(({ name, price, image, id, quantity }) => (
          <ProductCard
            id={id}
            key={id}
            name={name}
            price={price}
            image={image}
            handleAddToCart={async () => {
              console.log("Added to cart");
              if (cartItems.find((item) => item.id === id)) {
                alert("Item already in cart");
                return;
              }
              const updatedCartItems = [
                ...cartItems,
                { name, price, image, id, in_cart: 1, quantity },
              ];
              await setCartItems(updatedCartItems);
              try {
                if (currentUser) {
                  const UserDocRef = doc(db, "users", currentUser.uid);
                  await updateDoc(UserDocRef, { cartItems: updatedCartItems });
                  console.log("Cart items updated in Firestore");
                }
              } catch (error) {
                console.error("Error updating cart items in Firestore", error);
              }
            }}
          />
        ))}
      </div>
      <div className="pagination">
        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageClick(pageNumber)}
            className={currentPage === pageNumber ? "active" : ""}
          >
            {pageNumber}
          </button>
        ))}
      </div>
    </>
  );
};

export default ProductsPage;
