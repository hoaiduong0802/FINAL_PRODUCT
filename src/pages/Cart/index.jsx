import React from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { Link } from "react-router-dom";
import { PATHS } from "../../constants/paths";
import CartTable from "./CartTable";
import CartSummary from "./CartSummary";
import useCartPage from "./useCartPage";

const CartPage = () => {
  const { cartTableProps, cartSummaryProps } = useCartPage();
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
                <h1 className="page-title">Shopping Cart</h1>
              </div>
            </div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={PATHS.HOME}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item>
                <Link to={PATHS.PRODUCTS}>Product</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item isActive>Shopping Cart</Breadcrumb.Item>
            </Breadcrumb>

            {/* <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="product.html">Product</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Shopping Cart
                  </li>
                </ol>
              </div>
            </nav> */}
            <div className="page-content">
              <div className="cart">
                <div className="container">
                  <div className="row">
                    <CartTable {...cartTableProps} />
                    <CartSummary {...cartSummaryProps} />
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default CartPage;
