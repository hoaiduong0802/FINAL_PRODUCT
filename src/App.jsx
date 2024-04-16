import { message } from "antd";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { PATHS } from "./constants/paths";
import MainLayout from "./layouts/MainLayout";
import PageNotFound from "./pages/404";
import AboutUsPage from "./pages/About";
import Blog from "./pages/Blog";
import CartPage from "./pages/Cart";
import CheckOutPage from "./pages/CheckOutSucess";
import ContactPage from "./pages/Contact";
import DashBoardPage from "./pages/DashBoard";
import FAQPage from "./pages/FaqPage";
import HomePage from "./pages/HomePage";
import PaymentMethod from "./pages/PaymentMethod";
import PrivacyPage from "./pages/Privacy";
import ProductPage from "./pages/Product";
import ProductDetailPage from "./pages/ProductDetail";
import ReturnPage from "./pages/ReturnPage";
import ShippingPage from "./pages/ShippingPage";
import { handleGetProfile } from "./store/reducer/authReducer";
import { handleGetCart } from "./store/reducer/cartReducer";
import tokenMethod from "./utils/token";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    //antd message config
    message.config({
      top: 80,
      duration: 3,
      maxCount: 3,
    });

    if (tokenMethod.get()) {
      //handleGetProfile
      dispatch(handleGetProfile());
      //handleGetCart
      dispatch(handleGetCart());
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.PRODUCTS} element={<ProductPage />} />
          <Route path={PATHS.PRODUCT_DETAIL} element={<ProductDetailPage />} />
          <Route path={PATHS.DASHBOARD} element={<DashBoardPage />} />
          <Route path={PATHS.FAQ} element={<FAQPage />} />
          <Route path={PATHS.PAYMENT_METHOD} element={<PaymentMethod />} />
          <Route path={PATHS.RETURN} element={<ReturnPage />} />
          <Route path={PATHS.SHIPPING} element={<ShippingPage />} />
          <Route path={PATHS.BLOG} element={<Blog />} />
          <Route path={PATHS.CONTACT} element={<ContactPage />} />
          <Route path={PATHS.ABOUT} element={<AboutUsPage />} />
          <Route path={PATHS.PRIVATE_POLICY} element={<PrivacyPage />} />
          <Route element={<PrivateRoute redirectPath={PATHS.HOME} />}>
            <Route path={PATHS.CART} element={<CartPage />} />
            <Route path={PATHS.CHECKOUT} element={<CheckOutPage />} />
            <Route path={PATHS.CHECKOUT_SUCCESS} element={<CheckOutPage />} />
            <Route path={PATHS.PROFILE.INDEX} element={<DashBoardPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
