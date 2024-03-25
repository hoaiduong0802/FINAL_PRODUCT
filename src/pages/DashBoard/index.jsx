import React from "react";

const DashBoardPage = () => {
  return (
    <>
      <div>
        <div className="page-wrapper">
          <header className="header">
            <div className="header-top">
              <div className="container">
                <div className="header-left">
                  <a href="tel:0989596912">
                    <i className="icon-phone" /> Hotline: 098 9596 912
                  </a>
                </div>
                <div className="header-right">
                  {/* Not LogIn */}
                  <ul className="top-menu top-link-menu">
                    <li>
                      <a
                        href="#signin-modal"
                        data-toggle="modal"
                        className="top-menu-login"
                      >
                        <i className="icon-user" />
                        Login | Resgister
                      </a>
                    </li>
                  </ul>
                  {/* Logged In */}
                  {/* <ul class="top-menu">
                      <li>
                          <a href="#" class="top-link-menu"><i class="icon-user"></i>Thai Nguyen </a>
                          <ul>
                              <li>
                                  <ul>
                                      <li><a href="dashboard.html">Account Details</a></li>
                                      <li><a href="dashboard.html">Your Orders</a></li>
                                      <li><a href="dashboard.html">Wishlist <span>(3)</span></a></li>
                                      <li><a href="#">Sign Out</a></li>
                                  </ul>
                              </li>
                          </ul>
                      </li>
                  </ul> */}
                </div>
              </div>
            </div>
            <div className="header-middle sticky-header">
              <div className="container">
                <div className="header-left">
                  <button className="mobile-menu-toggler">
                    <span className="sr-only">Toggle mobile menu</span>
                    <i className="icon-bars" />
                  </button>
                  <a href="index.html" className="logo">
                    <img
                      src="assets/images/logo.svg"
                      alt="Molla Logo"
                      width={160}
                    />
                  </a>
                </div>
                <nav className="main-nav">
                  <ul className="menu">
                    <li className="active">
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="product.html">Product</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
                <div className="header-right">
                  <div className="header-search">
                    <a
                      href="#"
                      className="search-toggle"
                      role="button"
                      title="Search"
                    >
                      <i className="icon-search" />
                    </a>
                    <form action="#" method="get">
                      <div className="header-search-wrapper">
                        <label htmlFor="q" className="sr-only">
                          Search
                        </label>
                        <input
                          type="search"
                          className="form-control"
                          name="q"
                          id="q"
                          placeholder="Search in..."
                          required
                        />
                      </div>
                    </form>
                  </div>
                  <div className="dropdown cart-dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                      data-display="static"
                    >
                      <i className="icon-shopping-cart" />
                      <span className="cart-count">2</span>
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                      <div className="dropdown-cart-products">
                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product-detail.html">Beige knitted</a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span> x
                              $84.00
                            </span>
                          </div>
                          <figure className="product-image-container">
                            <a
                              href="product-detail.html"
                              className="product-image"
                            >
                              <img
                                src="assets/images/products/cart/product-1.jpg"
                                alt="product"
                              />
                            </a>
                          </figure>
                          <a
                            href="#"
                            className="btn-remove"
                            title="Remove Product"
                          >
                            <i className="icon-close" />
                          </a>
                        </div>
                        <div className="product">
                          <div className="product-cart-details">
                            <h4 className="product-title">
                              <a href="product-detail.html">Blue utility</a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span> x
                              $76.00
                            </span>
                          </div>
                          <figure className="product-image-container">
                            <a
                              href="product-detail.html"
                              className="product-image"
                            >
                              <img
                                src="assets/images/products/cart/product-2.jpg"
                                alt="product"
                              />
                            </a>
                          </figure>
                          <a
                            href="#"
                            className="btn-remove"
                            title="Remove Product"
                          >
                            <i className="icon-close" />
                          </a>
                        </div>
                      </div>
                      <div className="dropdown-cart-total">
                        <span>Total</span>
                        <span className="cart-total-price">$160.00</span>
                      </div>
                      <div className="dropdown-cart-action">
                        <a href="cart.html" className="btn btn-primary">
                          View Cart
                        </a>
                        <a
                          href="checkout.html"
                          className="btn btn-outline-primary-2"
                        >
                          <span>Checkout</span>
                          <i className="icon-long-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>
          <main className="main">
            <div
              className="page-header text-center"
              style={{
                backgroundImage: 'url("assets/images/page-header-bg.jpg")',
              }}
            >
              <div className="container">
                <h1 className="page-title">My Account</h1>
              </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    My Account
                  </li>
                </ol>
              </div>
            </nav>
            <div className="page-content">
              <div className="dashboard">
                <div className="container">
                  <div className="row">
                    <aside className="col-md-4 col-lg-3">
                      <ul
                        className="nav nav-dashboard flex-column mb-3 mb-md-0"
                        role="tablist"
                      >
                        <li className="nav-item">
                          <a
                            className="nav-link active"
                            id="tab-account-link"
                            data-toggle="tab"
                            href="#tab-account"
                            role="tab"
                            aria-controls="tab-account"
                            aria-selected="false"
                          >
                            Account Details
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="tab-orders-link"
                            data-toggle="tab"
                            href="#tab-orders"
                            role="tab"
                            aria-controls="tab-orders"
                            aria-selected="false"
                          >
                            Orders
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="tab-address-link"
                            data-toggle="tab"
                            href="#tab-address"
                            role="tab"
                            aria-controls="tab-address"
                            aria-selected="false"
                          >
                            Adresses
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            id="tab-wishlist-link"
                            data-toggle="tab"
                            href="#tab-wishlist"
                            role="tab"
                            aria-controls="tab-wishlist"
                            aria-selected="false"
                          >
                            Wishlist
                          </a>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Sign Out
                          </a>
                        </li>
                      </ul>
                    </aside>
                    <div className="col-md-8 col-lg-9">
                      <div className="tab-content">
                        <div
                          className="tab-pane fade show active"
                          id="tab-account"
                          role="tabpanel"
                          aria-labelledby="tab-account-link"
                        >
                          <form action="#" className="account-form">
                            <div className="row">
                              <div className="col-sm-6">
                                <label>Full Name *</label>
                                <input
                                  type="text"
                                  className="form-control"
                                  defaultValue="Tran"
                                  required
                                />
                              </div>
                              <div className="col-sm-6">
                                <label>Email address *</label>
                                <input
                                  type="email"
                                  className="form-control"
                                  defaultValue="trannghia@gmail.com"
                                  disabled
                                  required
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-6">
                                <label>Phone number *</label>
                                <input
                                  type="text"
                                  className="form-control input-error"
                                  required
                                />
                                <p className="form-error">
                                  Please fill in this field
                                </p>
                              </div>
                              <div className="col-sm-6">
                                <label>Ngày sinh *</label>
                                <input
                                  type="date"
                                  className="form-control"
                                  required
                                />
                              </div>
                            </div>
                            <div className="row">
                              <div className="col-sm-4">
                                <label>Province/City *</label>
                                <div className="select-custom">
                                  <select
                                    className="form-control form-select"
                                    id="city"
                                    aria-label="Default select example"
                                  >
                                    <option selected />
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <label>District/Town *</label>
                                <div className="select-custom">
                                  <select
                                    className="form-control form-select"
                                    id="district"
                                  >
                                    <option selected />
                                  </select>
                                </div>
                              </div>
                              <div className="col-sm-4">
                                <label>Ward *</label>
                                <div className="select-custom">
                                  <select
                                    className="form-control form-select"
                                    id="ward"
                                  >
                                    <option selected />
                                  </select>
                                </div>
                              </div>
                            </div>
                            <label>Street address *</label>
                            <input
                              type="email"
                              className="form-control"
                              defaultValue="30 Ba Thang Hai St."
                              required
                            />
                            <label>
                              Current password (leave blank to leave unchanged)
                            </label>
                            <input type="password" className="form-control" />
                            <label>
                              New password (leave blank to leave unchanged)
                            </label>
                            <input type="password" className="form-control" />
                            <label>Confirm new password</label>
                            <input
                              type="password"
                              className="form-control mb-2"
                            />
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>SAVE CHANGES</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                          </form>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tab-orders"
                          role="tabpanel"
                          aria-labelledby="tab-orders-link"
                        >
                          <p>No order has been made yet.</p>
                          <a
                            href="category.html"
                            className="btn btn-outline-primary-2"
                          >
                            <span>GO SHOP</span>
                            <i className="icon-long-arrow-right" />
                          </a>
                          <br />
                          <br />
                          <table className="table table-cart table-mobile">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-center">Total</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="product-col">
                                  <div className="product">
                                    <figure className="product-media">
                                      <a href="#">
                                        <img
                                          src="assets/images/demos/demo-3/products/product-3.jpg"
                                          alt="Product image"
                                        />
                                      </a>
                                    </figure>
                                    <h3 className="product-title">
                                      <a href="#">Beige knitted</a>
                                    </h3>
                                  </div>
                                </td>
                                <td className="price-col text-center">
                                  $84.00
                                </td>
                                <td className="quantity-col text-center">1</td>
                                <td className="total-col text-center">
                                  $84.00
                                </td>
                              </tr>
                              <tr>
                                <td className="product-col">
                                  <div className="product">
                                    <figure className="product-media">
                                      <a href="#">
                                        <img
                                          src="assets/images/demos/demo-3/products/product-2.jpg"
                                          alt="Product image"
                                        />
                                      </a>
                                    </figure>
                                    <h3 className="product-title">
                                      <a href="#">Blue utility</a>
                                    </h3>
                                  </div>
                                </td>
                                <td className="price-col text-center">
                                  $76.00
                                </td>
                                <td className="quantity-col text-center">1</td>
                                <td className="total-col text-center">
                                  $76.00
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tab-address"
                          role="tabpanel"
                          aria-labelledby="tab-address-link"
                        >
                          <p>
                            The following addresses will be used on the checkout
                            page by default.
                          </p>
                          <div className="row">
                            <div className="col-lg-6">
                              <div className="card card-dashboard">
                                <div className="card-body">
                                  <h3 className="card-title">
                                    Billing Address
                                  </h3>
                                  <p>
                                    <strong>Fullname:</strong> Thai Nguyen{" "}
                                    <br />
                                    <strong>Email:</strong> trannghia@gmail.com
                                    <br />
                                    <strong>Phone number:</strong> 098 9596 912
                                    <br />
                                    <br />
                                    <a href="#">
                                      Edit <i className="icon-edit" />{" "}
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div className="col-lg-6">
                              <div className="card card-dashboard">
                                <div className="card-body">
                                  <h3 className="card-title">
                                    Shipping Address
                                  </h3>
                                  <p>
                                    Cecilia Chapman 711-2880 Nulla St. Mankato
                                    Mississippi <br />
                                    <br />
                                    <a href="#">
                                      Edit <i className="icon-edit" />{" "}
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="tab-pane fade"
                          id="tab-wishlist"
                          role="tabpanel"
                          aria-labelledby="tab-wishlist-link"
                        >
                          <table className="table table-wishlist table-mobile">
                            <thead>
                              <tr>
                                <th>Product</th>
                                <th className="text-center">Price</th>
                                <th className="text-center">Stock Status</th>
                                <th />
                                <th />
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td className="product-col">
                                  <div className="product">
                                    <figure className="product-media">
                                      <a href="#">
                                        <img
                                          src="assets/images/demos/demo-3/products/product-4.jpg"
                                          alt="Product image"
                                        />
                                      </a>
                                    </figure>
                                    <h3 className="product-title">
                                      <a href="#">Beige knitted</a>
                                    </h3>
                                  </div>
                                </td>
                                <td className="price-col text-center">
                                  $84.00
                                </td>
                                <td className="stock-col text-center">
                                  <span className="in-stock">In stock</span>
                                </td>
                                <td className="action-col">
                                  <button className="btn btn-block btn-outline-primary-2">
                                    <i className="icon-cart-plus" />
                                    Add to Cart
                                  </button>
                                </td>
                                <td className="remove-col">
                                  <button className="btn-remove">
                                    <i className="icon-close" />
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td className="product-col">
                                  <div className="product">
                                    <figure className="product-media">
                                      <a href="#">
                                        <img
                                          src="assets/images/demos/demo-3/products/product-5.jpg"
                                          alt="Product image"
                                        />
                                      </a>
                                    </figure>
                                    <h3 className="product-title">
                                      <a href="#">Blue utility</a>
                                    </h3>
                                  </div>
                                </td>
                                <td className="price-col text-center">
                                  $76.00
                                </td>
                                <td className="stock-col text-center">
                                  <span className="in-stock">In stock</span>
                                </td>
                                <td className="action-col">
                                  <button className="btn btn-block btn-outline-primary-2">
                                    <i className="icon-cart-plus" />
                                    Add to Cart
                                  </button>
                                </td>
                                <td className="remove-col">
                                  <button className="btn-remove">
                                    <i className="icon-close" />
                                  </button>
                                </td>
                              </tr>
                              <tr>
                                <td className="product-col">
                                  <div className="product">
                                    <figure className="product-media">
                                      <a href="#">
                                        <img
                                          src="assets/images/demos/demo-3/products/product-6.jpg"
                                          alt="Product image"
                                        />
                                      </a>
                                    </figure>
                                    <h3 className="product-title">
                                      <a href="#">Orange saddle lock</a>
                                    </h3>
                                  </div>
                                </td>
                                <td className="price-col text-center">
                                  $52.00
                                </td>
                                <td className="stock-col text-center">
                                  <span className="out-of-stock">
                                    Out of stock
                                  </span>
                                </td>
                                <td className="action-col">
                                  <button className="btn btn-block btn-outline-primary-2 disabled">
                                    Out of Stock
                                  </button>
                                </td>
                                <td className="remove-col">
                                  <button className="btn-remove">
                                    <i className="icon-close" />
                                  </button>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <footer className="footer">
            <div className="footer-middle">
              <div className="container">
                <div className="row">
                  <div className="col-sm-6 col-lg-5">
                    <div className="widget widget-about">
                      <img
                        src="assets/images/logo.svg"
                        className="footer-logo"
                        alt="Footer Logo"
                        width={120}
                      />
                      <p>
                        Praesent dapibus, neque id cursus ucibus, tortor neque
                        egestas augue, eu vulputate magna eros eu erat.
                      </p>
                      <div className="widget-call">
                        <i className="icon-phone" /> Got Question? Call us 24/7
                        <a href="tel:#">098 9596 912</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-2 offset-lg-1">
                    <div className="widget">
                      <h4 className="widget-title">Useful Links</h4>
                      <ul className="widget-list">
                        <li>
                          <a href="about.html">About Us</a>
                        </li>
                        <li>
                          <a href="product.html">Product</a>
                        </li>
                        <li>
                          <a href="faq.html">FAQs</a>
                        </li>
                        <li>
                          <a href="contact.html">Contact us</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-2">
                    <div className="widget">
                      <h4 className="widget-title">Customer Service</h4>
                      <ul className="widget-list">
                        <li>
                          <a href="payment-methods.html">Payment Methods</a>
                        </li>
                        <li>
                          <a href="returns.html">Returns</a>
                        </li>
                        <li>
                          <a href="shipping.html">Shipping</a>
                        </li>
                        <li>
                          <a href="privacy-policy.html">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-2">
                    <div className="widget">
                      <h4 className="widget-title">My Account</h4>
                      <ul className="widget-list">
                        <li>
                          <a href="dashboard.html">Account Details</a>
                        </li>
                        <li>
                          <a href="cart.html">View Cart</a>
                        </li>
                        <li>
                          <a href="dashboard.html">My Wishlist</a>
                        </li>
                        <li>
                          <a href="dashboard.html">Track My Order</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <div className="container">
                <p className="footer-copyright">
                  Copyright © 2023
                  <a href="https://cfdcircle.vn/" target="_blank">
                    <strong>CFD Circle</strong>
                  </a>
                  . All Rights Reserved.
                </p>
                <figure className="footer-payments">
                  <img
                    src="assets/images/payments.png"
                    alt="Payment methods"
                    width={272}
                    height={20}
                  />
                </figure>
              </div>
            </div>
          </footer>
        </div>
        <button id="scroll-top" title="Back to Top">
          <i className="icon-arrow-up" />
        </button>
        {/* Mobile Menu */}
        <div className="mobile-menu-overlay" />
        {/* End .mobil-menu-overlay */}
        <div className="mobile-menu-container">
          <div className="mobile-menu-wrapper">
            <span className="mobile-menu-close">
              <i className="icon-close" />
            </span>
            <form action="#" method="get" className="mobile-search">
              <label htmlFor="mobile-search" className="sr-only">
                Search
              </label>
              <input
                type="search"
                className="form-control"
                name="mobile-search"
                id="mobile-search"
                placeholder="Search in..."
                required
              />
              <button className="btn btn-primary" type="submit">
                <i className="icon-search" />
              </button>
            </form>
            <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="mobile-menu-link"
                  data-toggle="tab"
                  href="#mobile-menu-tab"
                  role="tab"
                  aria-controls="mobile-menu-tab"
                  aria-selected="true"
                >
                  Menu
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="mobile-cats-link"
                  data-toggle="tab"
                  href="#mobile-cats-tab"
                  role="tab"
                  aria-controls="mobile-cats-tab"
                  aria-selected="false"
                >
                  Categories
                </a>
              </li>
            </ul>
            <div className="tab-content">
              <div
                className="tab-pane fade show active"
                id="mobile-menu-tab"
                role="tabpanel"
                aria-labelledby="mobile-menu-link"
              >
                <nav className="mobile-nav">
                  <ul className="mobile-menu">
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li>
                      <a href="product.html">Product</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact Us</a>
                    </li>
                  </ul>
                </nav>
                {/* End .mobile-nav */}
              </div>
              {/* .End .tab-pane */}
              <div
                className="tab-pane fade"
                id="mobile-cats-tab"
                role="tabpanel"
                aria-labelledby="mobile-cats-link"
              >
                <nav className="mobile-cats-nav">
                  <ul className="mobile-cats-menu">
                    <li>
                      <a className="mobile-cats-lead" href="#">
                        TV
                      </a>
                    </li>
                    <li>
                      <a href="#">Computers</a>
                    </li>
                    <li>
                      <a href="#">Tablets &amp; Cell Phones</a>
                    </li>
                    <li>
                      <a href="#">Smartwatches</a>
                    </li>
                    <li>
                      <a href="#">Accessories</a>
                    </li>
                  </ul>
                  {/* End .mobile-cats-menu */}
                </nav>
                {/* End .mobile-cats-nav */}
              </div>
              {/* .End .tab-pane */}
            </div>
            {/* End .tab-content */}
            <div className="social-icons">
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Facebook"
              >
                <i className="icon-facebook-f" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Twitter"
              >
                <i className="icon-twitter" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Instagram"
              >
                <i className="icon-instagram" />
              </a>
              <a
                href="#"
                className="social-icon"
                target="_blank"
                title="Youtube"
              >
                <i className="icon-youtube" />
              </a>
            </div>
            {/* End .social-icons */}
          </div>
          {/* End .mobile-menu-wrapper */}
        </div>
        {/* End .mobile-menu-container */}
        {/* Sign in / Register Modal */}
        <div
          className="modal fade"
          id="signin-modal"
          tabIndex={-1}
          role="dialog"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body">
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">
                    <i className="icon-close" />
                  </span>
                </button>
                <div className="form-box">
                  <div className="form-tab">
                    <ul
                      className="nav nav-pills nav-fill nav-border-anim"
                      role="tablist"
                    >
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          id="signin-tab"
                          data-toggle="tab"
                          href="#signin"
                          role="tab"
                          aria-controls="signin"
                          aria-selected="true"
                        >
                          Sign In
                        </a>
                      </li>
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          id="register-tab"
                          data-toggle="tab"
                          href="#register"
                          role="tab"
                          aria-controls="register"
                          aria-selected="false"
                        >
                          Register
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content" id="tab-content-5">
                      <div
                        className="tab-pane fade show active"
                        id="signin"
                        role="tabpanel"
                        aria-labelledby="signin-tab"
                      >
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="singin-email">
                              Username or email address *
                            </label>
                            <input
                              type="text"
                              className="form-control input-error"
                              id="singin-email"
                              name="singin-email"
                              required
                            />
                            <p className="form-error">
                              Please fill in this field
                            </p>
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="singin-password">Password *</label>
                            <input
                              type="password"
                              className="form-control"
                              id="singin-password"
                              name="singin-password"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-footer">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>LOG IN</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="signin-remember"
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="signin-remember"
                              >
                                Remember Me
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                            <a href="#" className="forgot-link">
                              Forgot Your Password?
                            </a>
                          </div>
                          {/* End .form-footer */}
                        </form>
                        <div className="form-choice">
                          <p className="text-center">or sign in with</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google" />
                                Login With Google
                              </a>
                            </div>
                            {/* End .col-6 */}
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-f">
                                <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                            </div>
                            {/* End .col-6 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .form-choice */}
                      </div>
                      {/* .End .tab-pane */}
                      <div
                        className="tab-pane fade"
                        id="register"
                        role="tabpanel"
                        aria-labelledby="register-tab"
                      >
                        <form action="#">
                          <div className="form-group">
                            <label htmlFor="register-email">
                              Your email address *
                            </label>
                            <input
                              type="email"
                              className="form-control input-error"
                              id="register-email"
                              name="register-email"
                              required
                            />
                            <p className="form-error">
                              Please fill in this field
                            </p>
                          </div>
                          {/* End .form-group */}
                          <div className="form-group">
                            <label htmlFor="register-password">
                              Password *
                            </label>
                            <input
                              type="password"
                              className="form-control"
                              id="register-password"
                              name="register-password"
                              required
                            />
                          </div>
                          {/* End .form-group */}
                          <div className="form-footer">
                            <button
                              type="submit"
                              className="btn btn-outline-primary-2"
                            >
                              <span>SIGN UP</span>
                              <i className="icon-long-arrow-right" />
                            </button>
                            <div className="custom-control custom-checkbox">
                              <input
                                type="checkbox"
                                className="custom-control-input"
                                id="register-policy"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="register-policy"
                              >
                                I agree to the
                                <a href="privacy-policy.html">privacy policy</a>
                                *
                              </label>
                            </div>
                            {/* End .custom-checkbox */}
                          </div>
                          {/* End .form-footer */}
                        </form>
                        <div className="form-choice">
                          <p className="text-center">or sign in with</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google" />
                                Login With Google
                              </a>
                            </div>
                            {/* End .col-6 */}
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-f">
                                <i className="icon-facebook-f" />
                                Login With Facebook
                              </a>
                            </div>
                            {/* End .col-6 */}
                          </div>
                          {/* End .row */}
                        </div>
                        {/* End .form-choice */}
                      </div>
                      {/* .End .tab-pane */}
                    </div>
                    {/* End .tab-content */}
                  </div>
                  {/* End .form-tab */}
                </div>
                {/* End .form-box */}
              </div>
              {/* End .modal-body */}
            </div>
            {/* End .modal-content */}
          </div>
          {/* End .modal-dialog */}
        </div>
        {/* End .modal */}
      </div>
    </>
  );
};

export default DashBoardPage;
