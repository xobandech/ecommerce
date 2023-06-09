import { Routes, Route, BrowserRouter } from "react-router-dom";
import { UserProvider } from "./components/Contexts/UserContext";
import { Elements } from "@stripe/react-stripe-js";
import CartItemsProvider from "./components/Contexts/CartItemsContext";
import NavigationBar from "./components/NavBar/NavigationBar";
import HomePage from "./components/Home/HomePage";
import Products from "./components/Products/Products";
import UserLogging from "./components/UserLogging/UserLogging";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import ProductsProvider from "./components/Contexts/ProductsContext";
import { stripePromise } from "./utils/stripe";
import CartPage from "./components/Cart/CartPage";
const App = () => {
  return (
    <BrowserRouter>
      <UserProvider>
        <CartItemsProvider>
          <ProductsProvider>
            <Elements stripe={stripePromise}>
              <Routes>
                <Route path="/" element={<NavigationBar />}>
                  <Route path="" element={<HomePage />} />
                  <Route path="products" element={<Products />} />
                  <Route path="cart" element={<CartPage />} />
                  <Route path="auth" element={<UserLogging />} />
                  <Route path="cart/checkout" element={<CheckoutPage />} />
                </Route>
              </Routes>
            </Elements>
          </ProductsProvider>
        </CartItemsProvider>
      </UserProvider>
    </BrowserRouter>
  );
};

export default App;
