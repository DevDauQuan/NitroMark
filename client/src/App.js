import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blog from "./pages/Blog";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Forgotpassword from "./pages/Forgotpassword";
import Signup from "./pages/Signup";
import Resetpassword from "./pages/Resetpassword";
import SingleBlog from "./pages/SingleBlog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPloicy from "./pages/RefundPloicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import TermAndContions from "./pages/TermAndContions";
import SingleProduct from "./pages/SingleProduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ChangePassword from "./pages/ChangePassword";
import ViewUser from "./pages/ViewUser";
import { refreshToken } from "./features/user/userSlice";
import { useDispatch } from "react-redux";
<<<<<<< HEAD
import ViewOrder from "./pages/ViewOrder";
import DetailOrder from "./pages/DetailOrder";
=======
<<<<<<< HEAD
import ViewOrder from "./pages/ViewOrder";
import DetailOrder from "./pages/DetailOrder";
=======
>>>>>>> 9f19b3122122231ef1eb29c6a78e4f9dede688e6
>>>>>>> 7852f0825f5f00fa43e06f89d3397a02f26ff9f8
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshToken());
  }, [dispatch]);


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product" element={<OurStore />} />
            <Route path="product/:id" element={<SingleProduct />} />
            <Route path="blogs" element={<Blog />} />
            <Route path="blog/:id" element={<SingleBlog />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="compare-product" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="forgot-password" element={<Forgotpassword />} />
            <Route path="signup" element={<Signup />} />
            <Route path="reset-password/:token" element={<Resetpassword />} />
            <Route path="privacy-policy" element={<PrivacyPolicy />} />
            <Route path="refund-policy" element={<RefundPloicy />} />
            <Route path="shipping-policy" element={<ShippingPolicy />} />
            <Route path="term-conditions" element={<TermAndContions />} />
            <Route path="change-password/:id" element={<ChangePassword />} />
            <Route path="user/:id" element={<ViewUser />} />
            <Route path="user/list-ordered" element={<ViewOrder />} />
            <Route path="user/detail-order/:id" element={<DetailOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
