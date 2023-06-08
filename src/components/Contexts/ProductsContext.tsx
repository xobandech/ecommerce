import React, {useState, createContext, useEffect} from "react";
import { getCollection } from "../../utils/firebase";

type Product = {
  category: string;
  id: number;
  image: string;
  in_cart: number;
  name: string;
  price: number;
  quantity: number;
} 

interface IProductsContextType {
  products: Product[];
  setProducts: (Products: Product[]) => void;
}

export const ProductsContext = createContext<IProductsContextType>({
  products: [],
  setProducts: () => null
});

const ProductsProvider = ({children}: { children: React.ReactNode}) => {
    const [products, setProducts] = useState<any>([]);
    useEffect(() => {
        const fetchProducts = async () => {
          const fetchedProducts = await getCollection("products");
          setProducts(fetchedProducts);
        };
        fetchProducts();
      }, []);
    const value: IProductsContextType = { products, setProducts }
    return (
        <ProductsContext.Provider value={value}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProvider