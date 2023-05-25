import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/Contexts/UserContext";
import CartItemsProvider from "./components/Contexts/CartItemsContext";
import NavigationBar from "./components/NavBar/NavigationBar";
import HomePage from "./components/Home/HomePage";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import UserLogging from "./components/UserLogging/UserLogging";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import ProductsProvider from "./components/Contexts/ProductsContext";

const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartItemsProvider>
              <ProductsProvider>
          <Routes>
            <Route path="/" element={<NavigationBar />}>
              <Route path="" element={<HomePage />} />
              <Route
                path="products"
                element={<Products/>}
              />
              <Route path="cart" element={<Cart />} />
              <Route path="auth" element={<UserLogging />} />
              <Route path="cart/checkout" element={<CheckoutPage />} />
            </Route>
          </Routes>
              </ProductsProvider>
        </CartItemsProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
