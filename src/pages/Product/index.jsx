import React from "react";

const ProductPage = () => {
  return (
    <>
      <div>
        <div className="page-wrapper">
          <header className="header">
            <div className="header-top">
              <div className="container">
                <div className="header-left">
                  <a href="tel:0989596912">
                    <i className="icon-phone" /> Hotline: 098 9596 912{" "}
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
                        Login | Resgister{" "}
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
                    <li>
                      <a href="index.html">Home</a>
                    </li>
                    <li>
                      <a href="about.html">About Us</a>
                    </li>
                    <li className="active">
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
                              <a href="product-detail.html">
                                Beige knitted elastic runner shoes
                              </a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span> x
                              $84.00{" "}
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
                              <a href="product-detail.html">
                                Blue utility pinafore denim dress
                              </a>
                            </h4>
                            <span className="cart-product-info">
                              <span className="cart-product-qty">1</span> x
                              $76.00{" "}
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
                <h1 className="page-title">Product</h1>
              </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-2">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Product
                  </li>
                </ol>
              </div>
            </nav>
            <div className="page-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div className="toolbox">
                      <div className="toolbox-left">
                        <div className="toolbox-info">
                          {" "}
                          Showing <span>9 of 56</span> Products{" "}
                        </div>
                      </div>
                      <div className="toolbox-right">
                        <div className="toolbox-sort">
                          <label htmlFor="sortby">Sort by:</label>
                          <div className="select-custom">
                            <select
                              name="sortby"
                              id="sortby"
                              className="form-control"
                            >
                              <option value="popularity" selected>
                                Most Popular
                              </option>
                              <option value="pricelow">
                                Price Low to High
                              </option>
                              <option value="pricehight">
                                Price Hight to Low{" "}
                              </option>
                              <option value="newest">Newest</option>
                              <option value="rating">Most Rated</option>
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="products mb-3">
                      <div className="row justify-content-center">
                        <div className="col-6 col-md-4 col-lg-4">
                          <div className="product product-2">
                            <figure className="product-media">
                              <a href="product-detail.html">
                                <img
                                  src="assets/images/demos/demo-3/products/product-11.jpg"
                                  alt="Product image"
                                  className="product-image"
                                />
                              </a>
                              <div className="product-action-vertical">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                  <span>add to wishlist</span>
                                </a>
                              </div>
                              <div className="product-action product-action-dark">
                                <a
                                  href="#"
                                  className="btn-product btn-cart"
                                  title="Add to cart"
                                >
                                  <span>add to cart</span>
                                </a>
                              </div>
                            </figure>
                            <div className="product-body">
                              <h3 className="product-title">
                                <a href="product-detail.html">
                                  MacBook Pro 13" Display, i5
                                </a>
                              </h3>
                              <div className="product-price"> $1,199.99 </div>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{ width: "100%" }}
                                  />
                                </div>
                                <span className="ratings-text">
                                  ( 4 Reviews )
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4">
                          <div className="product product-2">
                            <figure className="product-media">
                              <a href="product-detail.html">
                                <img
                                  src="assets/images/demos/demo-3/products/product-12.jpg"
                                  alt="Product image"
                                  className="product-image"
                                />
                              </a>
                              <div className="product-action-vertical">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                  <span>add to wishlist</span>
                                </a>
                              </div>
                              <div className="product-action product-action-dark">
                                <a
                                  href="#"
                                  className="btn-product btn-cart"
                                  title="Add to cart"
                                >
                                  <span>add to cart</span>
                                </a>
                              </div>
                            </figure>
                            <div className="product-body">
                              <h3 className="product-title">
                                <a href="product-detail.html">
                                  Bose - SoundLink Bluetooth Speaker
                                </a>
                              </h3>
                              <div className="product-price"> $79.99 </div>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{ width: "60%" }}
                                  />
                                </div>
                                <span className="ratings-text">
                                  ( 6 Reviews )
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4">
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-new">
                                New
                              </span>
                              <a href="product-detail.html">
                                <img
                                  src="assets/images/demos/demo-3/products/product-13.jpg"
                                  alt="Product image"
                                  className="product-image"
                                />
                              </a>
                              <div className="product-action-vertical">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                  <span>add to wishlist</span>
                                </a>
                              </div>
                              <div className="product-action product-action-dark">
                                <a
                                  href="#"
                                  className="btn-product btn-cart"
                                  title="Add to cart"
                                >
                                  <span>add to cart</span>
                                </a>
                              </div>
                            </figure>
                            <div className="product-body">
                              <h3 className="product-title">
                                <a href="product-detail.html">
                                  Apple - 11 Inch iPad Pro with Wi-Fi 256GB{" "}
                                </a>
                              </h3>
                              <div className="product-price"> $899.99 </div>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                                <span className="ratings-text">
                                  ( 4 Reviews )
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4">
                          <div className="product product-2">
                            <figure className="product-media">
                              <span className="product-label label-circle label-sale">
                                Sale
                              </span>
                              <a href="product-detail.html">
                                <img
                                  src="assets/images/demos/demo-3/products/product-14.jpg"
                                  alt="Product image"
                                  className="product-image"
                                />
                              </a>
                              <div className="product-action-vertical">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                  <span>add to wishlist</span>
                                </a>
                              </div>
                              <div className="product-action product-action-dark">
                                <a
                                  href="#"
                                  className="btn-product btn-cart"
                                  title="Add to cart"
                                >
                                  <span>add to cart</span>
                                </a>
                              </div>
                            </figure>
                            <div className="product-body">
                              <h3 className="product-title">
                                <a href="product-detail.html">
                                  Google - Pixel 3 XL 128GB
                                </a>
                              </h3>
                              <div className="product-price">
                                <span className="new-price">$35.41</span>
                                <span className="old-price">Was $41.67</span>
                              </div>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{ width: "100%" }}
                                  />
                                </div>
                                <span className="ratings-text">
                                  ( 10 Reviews )
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4">
                          <div className="product product-2">
                            <figure className="product-media">
                              <a href="product-detail.html">
                                <img
                                  src="assets/images/demos/demo-3/products/product-15.jpg"
                                  alt="Product image"
                                  className="product-image"
                                />
                              </a>
                              <div className="product-action-vertical">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                  <span>add to wishlist</span>
                                </a>
                              </div>
                              <div className="product-action product-action-dark">
                                <a
                                  href="#"
                                  className="btn-product btn-cart"
                                  title="Add to cart"
                                >
                                  <span>add to cart</span>
                                </a>
                              </div>
                            </figure>
                            <div className="product-body">
                              <h3 className="product-title">
                                <a href="product-detail.html">
                                  Samsung - 55" Class LED 2160p Smart
                                </a>
                              </h3>
                              <div className="product-price"> $899.99 </div>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{ width: "60%" }}
                                  />
                                </div>
                                <span className="ratings-text">
                                  ( 5 Reviews )
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-6 col-md-4 col-lg-4">
                          <div className="product product-2">
                            <figure className="product-media">
                              <a href="product-detail.html">
                                <img
                                  src="assets/images/demos/demo-3/products/product-11.jpg"
                                  alt="Product image"
                                  className="product-image"
                                />
                              </a>
                              <div className="product-action-vertical">
                                <a
                                  href="#"
                                  className="btn-product-icon btn-wishlist btn-expandable"
                                >
                                  <span>add to wishlist</span>
                                </a>
                              </div>
                              <div className="product-action product-action-dark">
                                <a
                                  href="#"
                                  className="btn-product btn-cart"
                                  title="Add to cart"
                                >
                                  <span>add to cart</span>
                                </a>
                              </div>
                            </figure>
                            <div className="product-body">
                              <h3 className="product-title">
                                <a href="product-detail.html">
                                  MacBook Pro 13" Display, i5
                                </a>
                              </h3>
                              <div className="product-price"> $1,199.99 </div>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{ width: "100%" }}
                                  />
                                </div>
                                <span className="ratings-text">
                                  ( 4 Reviews )
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <nav aria-label="Page navigation">
                      <ul className="pagination justify-content-center">
                        <li className="page-item disabled">
                          <a
                            className="page-link page-link-prev"
                            href="#"
                            aria-label="Previous"
                            tabIndex={-1}
                            aria-disabled="true"
                          >
                            <span aria-hidden="true">
                              <i className="icon-long-arrow-left" />
                            </span>
                            Prev{" "}
                          </a>
                        </li>
                        <li className="page-item active" aria-current="page">
                          <a className="page-link" href="#">
                            1
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            2
                          </a>
                        </li>
                        <li className="page-item">
                          <a className="page-link" href="#">
                            3
                          </a>
                        </li>
                        <li className="page-item-total">of 6</li>
                        <li className="page-item">
                          <a
                            className="page-link page-link-next"
                            href="#"
                            aria-label="Next"
                          >
                            {" "}
                            Next{" "}
                            <span aria-hidden="true">
                              <i className="icon-long-arrow-right" />
                            </span>
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  <aside className="col-lg-3 order-lg-first">
                    <div className="sidebar sidebar-shop">
                      <div className="widget widget-clean">
                        <label>Filters:</label>
                        <a href="#" className="sidebar-filter-clear">
                          Clean All
                        </a>
                      </div>
                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <a
                            data-toggle="collapse"
                            href="#widget-1"
                            role="button"
                            aria-expanded="true"
                            aria-controls="widget-1"
                          >
                            {" "}
                            Category{" "}
                          </a>
                        </h3>
                        <div className="collapse show" id="widget-1">
                          <div className="widget-body">
                            <div className="filter-items filter-items-count">
                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="cat-1"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="cat-1"
                                  >
                                    TV
                                  </label>
                                </div>
                                <span className="item-count">3</span>
                              </div>
                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="cat-2"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="cat-2"
                                  >
                                    Computers
                                  </label>
                                </div>
                                <span className="item-count">0</span>
                              </div>
                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="cat-3"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="cat-3"
                                  >
                                    Tablets &amp; Cell Phones
                                  </label>
                                </div>
                                <span className="item-count">4</span>
                              </div>
                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="cat-4"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="cat-4"
                                  >
                                    Smartwatches
                                  </label>
                                </div>
                                <span className="item-count">2</span>
                              </div>
                              <div className="filter-item">
                                <div className="custom-control custom-checkbox">
                                  <input
                                    type="checkbox"
                                    className="custom-control-input"
                                    id="cat-5"
                                  />
                                  <label
                                    className="custom-control-label"
                                    htmlFor="cat-5"
                                  >
                                    Accessories
                                  </label>
                                </div>
                                <span className="item-count">2</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="widget widget-collapsible">
                        <h3 className="widget-title">
                          <a
                            data-toggle="collapse"
                            href="#widget-2"
                            role="button"
                            aria-expanded="true"
                            aria-controls="widget-5"
                          >
                            {" "}
                            Price{" "}
                          </a>
                        </h3>
                        <div className="collapse show" id="widget-2">
                          <div className="widget-body">
                            <div className="filter-price">
                              <div className="filter-price-text">
                                {" "}
                                Price Range: <span id="filter-price-range" />
                              </div>
                              <div id="price-slider" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </aside>
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
                        egestas augue, eu vulputate magna eros eu erat.{" "}
                      </p>
                      <div className="widget-call">
                        <i className="icon-phone" /> Got Question? Call us 24/7{" "}
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
                  Copyright © 2023{" "}
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
                    <li className="active">
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
              </div>
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
                </nav>
              </div>
            </div>
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
          </div>
        </div>
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
                            <a href="#" className="forgot-link">
                              Forgot Your Password?
                            </a>
                          </div>
                        </form>
                        <div className="form-choice">
                          <p className="text-center">or sign in with</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google" /> Login With Google{" "}
                              </a>
                            </div>
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-f">
                                <i className="icon-facebook-f" /> Login With
                                Facebook{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
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
                                <a href="privacy-policy.html">
                                  privacy policy
                                </a>{" "}
                                *{" "}
                              </label>
                            </div>
                          </div>
                        </form>
                        <div className="form-choice">
                          <p className="text-center">or sign in with</p>
                          <div className="row">
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login btn-g">
                                <i className="icon-google" /> Login With Google{" "}
                              </a>
                            </div>
                            <div className="col-sm-6">
                              <a href="#" className="btn btn-login  btn-f">
                                <i className="icon-facebook-f" /> Login With
                                Facebook{" "}
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
