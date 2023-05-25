import "./productsStyling.scss";
import ProductsPage from "./ProductsPage";
const Products = () => {
  return (
    <>
        <h1>Our Products</h1>
        <div>
          <ProductsPage productsPerPage={20} />
        </div>
    </>
  );
};

export default Products;