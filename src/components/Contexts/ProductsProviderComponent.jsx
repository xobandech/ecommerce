import React, {useState} from "react";
export const ProductsContext = React.createContext([]);

const ProductsProviderComponent = ({children}) => {
    const [cartItems, setCartItems] = useState([]);

    return (
        <ProductsContext.Provider value={{cartItems, setCartItems}}>
            {children}
        </ProductsContext.Provider>
    )
}

export default ProductsProviderComponent