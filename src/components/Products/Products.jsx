import "./productsStyling.scss";
import ProductsPage from "./ProductsPage";
const Products = ({ products }) => {
  return (
    <>
        <h1>Our Products</h1>
        <div>
          <ProductsPage products={products} productsPerPage={20} />
        </div>
    </>
  );
};

export default Products;
