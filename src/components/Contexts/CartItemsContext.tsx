import React, {useState, createContext} from "react";
import { Product } from "./ProductsContext";

interface ICartItemsContextType {
    cartItems: Product[];
    setCartItems: (cartItems: Product[]) => void
}

export const CartItemsContext = createContext<ICartItemsContextType>({
    cartItems: [],
    setCartItems: () => null,
})

const CartItemsProvider = ({children}:{ children: React.ReactNode }) => {
    const [cartItems, setCartItems] = useState<Product[]>([]);
    const value: ICartItemsContextType = { cartItems, setCartItems}
    return (
        <CartItemsContext.Provider value={ value }>
            {children}
        </CartItemsContext.Provider>
    )
}

export default CartItemsProvider