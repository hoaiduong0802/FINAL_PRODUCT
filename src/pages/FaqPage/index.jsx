import React from "react";

const FAQPage = () => {
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
                <h1 className="page-title">FAQs</h1>
              </div>
            </div>
            <nav aria-label="breadcrumb" className="breadcrumb-nav">
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    FAQs
                  </li>
                </ol>
              </div>
            </nav>
            <div className="page-content">
              <div className="container">
                <h2 className="title text-center mb-3">Shipping Information</h2>
                <div className="accordion accordion-rounded" id="accordion-1">
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading-1">
                      <h2 className="card-title">
                        <a
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-1"
                          aria-expanded="true"
                          aria-controls="collapse-1"
                        >
                          {" "}
                          How will my parcel be delivered?{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse-1"
                      className="collapse show"
                      aria-labelledby="heading-1"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna nibh, viverra
                        non, semper suscipit, posuere a, pede. Donec nec justo
                        eget felis facilisis fermentum. Aliquam porttitor mauris
                        sit amet orci. Aenean dignissim pellentesque felis.
                        Phasellus ultrices nulla quis nibh. Quisque a lectus.
                        Donec consectetuer ligula vulputate sem tristique
                        cursus. Nam nulla quam, gravida non, commodo a, sodales
                        sit amet, nisi.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading-2">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-2"
                          aria-expanded="false"
                          aria-controls="collapse-2"
                        >
                          {" "}
                          Do I pay for delivery?{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse-2"
                      className="collapse"
                      aria-labelledby="heading-2"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        {" "}
                        Ipsum dolor sit amet, consectetuer adipiscing elit.
                        Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna nibh, viverra
                        non, semper suscipit, posuere a, pede. Donec nec justo
                        eget felis facilisis fermentum.Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit. Donec odio. Quisque
                        volutpat mattis eros.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading-3">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-3"
                          aria-expanded="false"
                          aria-controls="collapse-3"
                        >
                          {" "}
                          Will I be charged customs fees?{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse-3"
                      className="collapse"
                      aria-labelledby="heading-3"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        {" "}
                        Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                        viverra non, semper suscipit, posuere a, pede. Donec nec
                        justo eget felis facilisis fermentum.Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit. Donec odio.
                        Quisque volutpat mattis eros. Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit. Donec odio. Quisque
                        volutpat mattis eros.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading-4">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse-4"
                          aria-expanded="false"
                          aria-controls="collapse-4"
                        >
                          {" "}
                          My item has become faulty{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse-4"
                      className="collapse"
                      aria-labelledby="heading-4"
                      data-parent="#accordion-1"
                    >
                      <div className="card-body">
                        {" "}
                        Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                        viverra non, semper suscipit, posuere a, pede. Donec nec
                        justo eget felis facilisis fermentum.Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit. Donec odio.
                        Quisque volutpat mattis eros. Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit. Donec odio. Quisque
                        volutpat mattis eros.{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="title text-center mb-3">Orders and Returns</h2>
                <div className="accordion accordion-rounded" id="accordion-2">
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading2-1">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse2-1"
                          aria-expanded="false"
                          aria-controls="collapse2-1"
                        >
                          {" "}
                          Tracking my order{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse2-1"
                      className="collapse"
                      aria-labelledby="heading2-1"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna nibh, viverra
                        non, semper suscipit, posuere a, pede. Donec nec justo
                        eget felis facilisis fermentum.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading2-2">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse2-2"
                          aria-expanded="false"
                          aria-controls="collapse2-2"
                        >
                          {" "}
                          I haven’t received my order{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse2-2"
                      className="collapse"
                      aria-labelledby="heading2-2"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        {" "}
                        Ipsum dolor sit amet, consectetuer adipiscing elit.
                        Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna nibh, viverra
                        non, semper suscipit, posuere a, pede. Donec nec justo
                        eget felis facilisis fermentum.Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit. Donec odio. Quisque
                        volutpat mattis eros.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading2-3">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse2-3"
                          aria-expanded="false"
                          aria-controls="collapse2-3"
                        >
                          {" "}
                          How can I return an item?{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse2-3"
                      className="collapse"
                      aria-labelledby="heading2-3"
                      data-parent="#accordion-2"
                    >
                      <div className="card-body">
                        {" "}
                        Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                        viverra non, semper suscipit, posuere a, pede. Donec nec
                        justo eget felis facilisis fermentum.Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit. Donec odio.
                        Quisque volutpat mattis eros. Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit. Donec odio. Quisque
                        volutpat mattis eros.{" "}
                      </div>
                    </div>
                  </div>
                </div>
                <h2 className="title text-center mb-3">Payments</h2>
                <div className="accordion accordion-rounded" id="accordion-3">
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading3-1">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse3-1"
                          aria-expanded="false"
                          aria-controls="collapse3-1"
                        >
                          {" "}
                          What payment types can I use?{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse3-1"
                      className="collapse"
                      aria-labelledby="heading3-1"
                      data-parent="#accordion-3"
                    >
                      <div className="card-body">
                        {" "}
                        Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna nibh, viverra
                        non, semper suscipit, posuere a, pede. Donec nec justo
                        eget felis facilisis fermentum.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading3-2">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse3-2"
                          aria-expanded="false"
                          aria-controls="collapse3-2"
                        >
                          {" "}
                          Can I pay by Gift Card?{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse3-2"
                      className="collapse"
                      aria-labelledby="heading3-2"
                      data-parent="#accordion-3"
                    >
                      <div className="card-body">
                        {" "}
                        Ipsum dolor sit amet, consectetuer adipiscing elit.
                        Donec odio. Quisque volutpat mattis eros. Nullam
                        malesuada erat ut turpis. Suspendisse urna nibh, viverra
                        non, semper suscipit, posuere a, pede. Donec nec justo
                        eget felis facilisis fermentum.Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit. Donec odio. Quisque
                        volutpat mattis eros.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading3-3">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse3-3"
                          aria-expanded="false"
                          aria-controls="collapse3-3"
                        >
                          {" "}
                          I can't make a payment{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse3-3"
                      className="collapse"
                      aria-labelledby="heading3-3"
                      data-parent="#accordion-3"
                    >
                      <div className="card-body">
                        {" "}
                        Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                        viverra non, semper suscipit, posuere a, pede. Donec nec
                        justo eget felis facilisis fermentum.Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit. Donec odio.
                        Quisque volutpat mattis eros. Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit. Donec odio. Quisque
                        volutpat mattis eros.{" "}
                      </div>
                    </div>
                  </div>
                  <div className="card card-box card-sm bg-light">
                    <div className="card-header" id="heading3-4">
                      <h2 className="card-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          href="#collapse3-4"
                          aria-expanded="false"
                          aria-controls="collapse3-4"
                        >
                          {" "}
                          Has my payment gone through?{" "}
                        </a>
                      </h2>
                    </div>
                    <div
                      id="collapse3-4"
                      className="collapse"
                      aria-labelledby="heading3-4"
                      data-parent="#accordion-3"
                    >
                      <div className="card-body">
                        {" "}
                        Nullam malesuada erat ut turpis. Suspendisse urna nibh,
                        viverra non, semper suscipit, posuere a, pede. Donec nec
                        justo eget felis facilisis fermentum.Lorem ipsum dolor
                        sit amet, consectetuer adipiscing elit. Donec odio.
                        Quisque volutpat mattis eros. Lorem ipsum dolor sit
                        amet, consectetuer adipiscing elit. Donec odio. Quisque
                        volutpat mattis eros.{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="cta cta-display bg-image pt-4 pb-4"
              style={{
                backgroundImage: "url(assets/images/backgrounds/cta/bg-7.jpg)",
              }}
            >
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-9 col-xl-7">
                    <div className="row no-gutters flex-column flex-sm-row align-items-sm-center">
                      <div className="col">
                        <h3 className="cta-title text-white">
                          If You Have More Questions
                        </h3>
                        <p className="cta-desc text-white">
                          Quisque volutpat mattis eros
                        </p>
                      </div>
                      <div className="col-auto">
                        <a
                          href="contact.html"
                          className="btn btn-outline-white"
                        >
                          <span>CONTACT US</span>
                          <i className="icon-long-arrow-right" />
                        </a>
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
                                <a href="privacy-policy.html">
                                  privacy policy
                                </a>{" "}
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
                              <a href="#" className="btn btn-login  btn-f">
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

export default FAQPage;
