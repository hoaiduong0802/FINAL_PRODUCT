import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import { PATHS } from "./constants/paths";
import PrivateRoute from "./components/PrivateRoute";
import CheckOutPage from "./pages/CheckOutSucess";
import PageNotFound from "./pages/404";
import ProductPage from "./pages/Product";
import ProductDetailPage from "./pages/ProductDetail";
import DashBoardPage from "./pages/DashBoard";
import FAQPage from "./pages/FaqPage";
import PaymentMethod from "./pages/PaymentMethod";
import ReturnPage from "./pages/ReturnPage";
import ShippingPage from "./pages/ShippingPage";
import Blog from "./pages/Blog";
import ContactPage from "./pages/Contact";
import AboutUsPage from "./pages/About";
import PrivacyPage from "./pages/Privacy";
import CartPage from "./pages/Cart";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path={PATHS.PRODUCTS} element={<ProductPage />} />
          <Route path={PATHS.PRODUCTS.DETAIL} element={<ProductDetailPage />} />
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
            <Route
              path={PATHS.CHECKOUT_SUCCESS}
              element={<CheckOutPage />}
            />
            <Route path={PATHS.PROFILE.INDEX} element={<DashBoardPage />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
