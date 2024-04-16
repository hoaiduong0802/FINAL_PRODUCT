import React from "react";
import useCheckoutPage from "./useCheckoutPage";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import CheckoutDiscount from "./CheckoutDiscount";
import CheckoutForm from "./CheckoutForm";

const CheckOutDefault = () => {
  const { couponProps, checkoutFormProps } = useCheckoutPage();
  return (
    <>
      <div>
        <div className="page-wrapper">
          <main className="main">
            <div
              className="page-header text-center"
              style={{
                backgroundImage: 'url("assets/images/page-header-bg.jpg")',
              }}
            >
              <div className="container">
                <h1 className="page-title">Checkout</h1>
              </div>
            </div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={PATHS.HOME}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={PATHS.PRODUCTS}>Products</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item to={PATHS.CHECKOUT} isActive>
                Checkout
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="page-content">
              <div className="checkout">
                <div className="container">
                  <CheckoutDiscount {...couponProps} />
                  <CheckoutForm {...checkoutFormProps} />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CheckOutDefault;
