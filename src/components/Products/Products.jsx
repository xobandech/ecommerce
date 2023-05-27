  import "./productsStyling.scss";
import ProductsPage from "./ProductsPage";
import ProductsProvider from "../Contexts/ProductsContext";
const Products = () => {
  return (
    <ProductsProvider>
        <h1>Our Products</h1>
        <div>
          <ProductsPage productsPerPage={20} />
        </div>
    </ProductsProvider>
  );
};

export default Products;