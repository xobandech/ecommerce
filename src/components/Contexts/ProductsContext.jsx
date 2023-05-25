import React, {useState, createContext, useEffect} from "react";
import { getCollection } from "../../utils/firebase";
export const ProductsContext = createContext([]);

const ProductsProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
          const fetchedProducts = await getCollection("products");
          setProducts(fetchedProducts); // Set the products state with the fetched products
        };
        fetchProducts();
      }, []);
    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider