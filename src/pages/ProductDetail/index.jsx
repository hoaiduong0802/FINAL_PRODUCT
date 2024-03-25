import React from "react";

const ProductDetailPage = () => {
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
            <nav
              aria-label="breadcrumb"
              className="breadcrumb-nav border-0 mb-0"
            >
              <div className="container d-flex align-items-center">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="product.html">Product</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Dark yellow lace
                  </li>
                </ol>
              </div>
            </nav>
            <div className="page-content">
              <div className="container">
                <div className="product-details-top">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="product-gallery product-gallery-vertical">
                        <div className="row">
                          <figure className="product-main-image">
                            <img
                              id="product-zoom"
                              src="assets/images/products/single/1.jpg"
                              data-zoom-image="assets/images/products/single/1-big.jpg"
                              alt="product image"
                            />
                            <div
                              id="btn-product-gallery"
                              className="btn-product-gallery"
                            >
                              <i className="icon-arrows" />
                            </div>
                          </figure>
                          <div
                            id="product-zoom-gallery"
                            className="product-image-gallery"
                          >
                            <a
                              className="product-gallery-item active"
                              href="#"
                              data-image="assets/images/products/single/1.jpg"
                              data-zoom-image="assets/images/products/single/1-big.jpg"
                            >
                              <img
                                src="assets/images/products/single/1-small.jpg"
                                alt="Dark yellow lace"
                              />
                            </a>
                            <a
                              className="product-gallery-item"
                              href="#"
                              data-image="assets/images/products/single/2-big.jpg"
                              data-zoom-image="assets/images/products/single/2-big.jpg"
                            >
                              <img
                                src="assets/images/products/single/2-small.jpg"
                                alt="Dark yellow lace"
                              />
                            </a>
                            <a
                              className="product-gallery-item"
                              href="#"
                              data-image="assets/images/products/single/3-big.jpg"
                              data-zoom-image="assets/images/products/single/3-big.jpg"
                            >
                              <img
                                src="assets/images/products/single/3-small.jpg"
                                alt="Dark yellow lace"
                              />
                            </a>
                            <a
                              className="product-gallery-item"
                              href="#"
                              data-image="assets/images/products/single/4-big.jpg"
                              data-zoom-image="assets/images/products/single/4-big.jpg"
                            >
                              <img
                                src="assets/images/products/single/4-small.jpg"
                                alt="Dark yellow lace"
                              />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="product-details">
                        <h1 className="product-title">Dark yellow lace</h1>
                        <div className="ratings-container">
                          <div className="ratings">
                            <div
                              className="ratings-val"
                              style={{ width: "80%" }}
                            />
                          </div>
                          <a
                            className="ratings-text"
                            href="#product-review-link"
                            id="review-link"
                          >
                            ( 2 Reviews )
                          </a>
                        </div>
                        <div className="product-price"> $84.00 </div>
                        <div className="product-content">
                          <p>
                            Sed egestas, ante et vulputate volutpat, eros pede
                            semper est, vitae luctus metus libero eu augue.
                            Morbi purus libero, faucibus adipiscing. Sed lectus.{" "}
                          </p>
                        </div>
                        <div className="details-filter-row details-row-size">
                          <label>Color:</label>
                          <div className="product-nav product-nav-dots">
                            <div
                              className="product-nav-item active"
                              style={{ background: "#e2e2e2" }}
                            >
                              <span className="sr-only">Color name</span>
                            </div>
                            <div
                              className="product-nav-item"
                              style={{ background: "#333333" }}
                            >
                              <span className="sr-only">Color name</span>
                            </div>
                            <div
                              className="product-nav-item"
                              style={{ background: "#f2bc9e" }}
                            >
                              <span className="sr-only">Color name</span>
                            </div>
                          </div>
                        </div>
                        <div className="details-filter-row details-row-size">
                          <label htmlFor="qty">Qty:</label>
                          <div className="product-details-quantity">
                            <input
                              type="number"
                              id="qty"
                              className="form-control"
                              defaultValue={1}
                              min={1}
                              max={10}
                              step={1}
                              data-decimals={0}
                              required
                            />
                          </div>
                        </div>
                        <div className="product-details-action">
                          <a href="#" className="btn-product btn-cart">
                            <span>add to cart</span>
                          </a>
                          <div className="details-action-wrapper">
                            <a
                              href="#"
                              className="btn-product btn-wishlist"
                              title="Wishlist"
                            >
                              <span>Add to Wishlist</span>
                            </a>
                          </div>
                        </div>
                        <div className="product-details-footer">
                          <div className="product-cat">
                            <span>Category:</span>
                            <a href="#">Women</a>, <a href="#">Dresses</a>,{" "}
                            <a href="#">Yellow</a>
                          </div>
                          <div className="social-icons social-icons-sm">
                            <span className="social-label">Share:</span>
                            <a
                              href="#"
                              className="social-icon"
                              title="Facebook"
                              target="_blank"
                            >
                              <i className="icon-facebook-f" />
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Twitter"
                              target="_blank"
                            >
                              <i className="icon-twitter" />
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Instagram"
                              target="_blank"
                            >
                              <i className="icon-instagram" />
                            </a>
                            <a
                              href="#"
                              className="social-icon"
                              title="Pinterest"
                              target="_blank"
                            >
                              <i className="icon-pinterest" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="product-details-tab">
                  <ul
                    className="nav nav-pills justify-content-center"
                    role="tablist"
                  >
                    <li className="nav-item">
                      <a
                        className="nav-link active"
                        id="product-desc-link"
                        data-toggle="tab"
                        href="#product-desc-tab"
                        role="tab"
                        aria-controls="product-desc-tab"
                        aria-selected="true"
                      >
                        Description
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="product-shipping-link"
                        data-toggle="tab"
                        href="#product-shipping-tab"
                        role="tab"
                        aria-controls="product-shipping-tab"
                        aria-selected="false"
                      >
                        Shipping &amp; Returns
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link"
                        id="product-review-link"
                        data-toggle="tab"
                        href="#product-review-tab"
                        role="tab"
                        aria-controls="product-review-tab"
                        aria-selected="false"
                      >
                        Reviews (2)
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content">
                    <div
                      className="tab-pane fade show active"
                      id="product-desc-tab"
                      role="tabpanel"
                      aria-labelledby="product-desc-link"
                    >
                      <div className="product-desc-content">
                        <h3>Product Information</h3>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Donec odio. Quisque volutpat mattis eros. Nullam
                          malesuada erat ut turpis. Suspendisse urna viverra
                          non, semper suscipit, posuere a, pede. Donec nec justo
                          eget felis facilisis fermentum. Aliquam porttitor
                          mauris sit amet orci. Aenean dignissim pellentesque
                          felis. Phasellus ultrices nulla quis nibh. Quisque a
                          lectus. Donec consectetuer ligula vulputate sem
                          tristique cursus.{" "}
                        </p>
                        <ul>
                          <li>
                            Nunc nec porttitor turpis. In eu risus enim. In
                            vitae mollis elit.{" "}
                          </li>
                          <li>Vivamus finibus vel mauris ut vehicula.</li>
                          <li>
                            Nullam a magna porttitor, dictum risus nec, faucibus
                            sapien.
                          </li>
                        </ul>
                        <p>
                          Lorem ipsum dolor sit amet, consectetuer adipiscing
                          elit. Donec odio. Quisque volutpat mattis eros. Nullam
                          malesuada erat ut turpis. Suspendisse urna viverra
                          non, semper suscipit, posuere a, pede. Donec nec justo
                          eget felis facilisis fermentum. Aliquam porttitor
                          mauris sit amet orci. Aenean dignissim pellentesque
                          felis. Phasellus ultrices nulla quis nibh. Quisque a
                          lectus. Donec consectetuer ligula vulputate sem
                          tristique cursus.{" "}
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="product-shipping-tab"
                      role="tabpanel"
                      aria-labelledby="product-shipping-link"
                    >
                      <div className="product-desc-content">
                        <h3>Delivery &amp; returns</h3>
                        <p>
                          We deliver to over 100 countries around the world. For
                          full details of the delivery options we offer, please
                          view our <a href="#">Delivery information</a>
                          <br /> We hope you’ll love every purchase, but if you
                          ever need to return an item you can do so within a
                          month of receipt. For full details of how to make a
                          return, please view our{" "}
                          <a href="#">Returns information</a>
                        </p>
                      </div>
                    </div>
                    <div
                      className="tab-pane fade"
                      id="product-review-tab"
                      role="tabpanel"
                      aria-labelledby="product-review-link"
                    >
                      <div className="reviews">
                        <h3>Reviews (2)</h3>
                        <div className="review">
                          <div className="row no-gutters">
                            <div className="col-auto">
                              <h4>
                                <a href="#">Samanta J.</a>
                              </h4>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{ width: "80%" }}
                                  />
                                </div>
                              </div>
                              <span className="review-date">6 days ago</span>
                            </div>
                            <div className="col">
                              <h4>Good, perfect size</h4>
                              <div className="review-content">
                                <p>
                                  Lorem ipsum dolor sit amet, consectetur
                                  adipisicing elit. Ducimus cum dolores
                                  assumenda asperiores facilis porro
                                  reprehenderit animi culpa atque blanditiis
                                  commodi perspiciatis doloremque, possimus,
                                  explicabo, autem fugit beatae quae voluptas!
                                </p>
                              </div>
                              <div className="review-action">
                                <a href="#">
                                  <i className="icon-thumbs-up" />
                                  Helpful (2){" "}
                                </a>
                                <a href="#">
                                  <i className="icon-thumbs-down" />
                                  Unhelpful (0){" "}
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review">
                          <div className="row no-gutters">
                            <div className="col-auto">
                              <h4>
                                <a href="#">John Doe</a>
                              </h4>
                              <div className="ratings-container">
                                <div className="ratings">
                                  <div
                                    className="ratings-val"
                                    style={{ width: "100%" }}
                                  />
                                </div>
                              </div>
                              <span className="review-date">5 days ago</span>
                            </div>
                            <div className="col">
                              <h4>Very good</h4>
                              <div className="review-content">
                                <p>
                                  Sed, molestias, tempore? Ex dolor esse iure
                                  hic veniam laborum blanditiis laudantium iste
                                  amet. Cum non voluptate eos enim, ab cumque
                                  nam, modi, quas iure illum repellendus,
                                  blanditiis perspiciatis beatae!
                                </p>
                              </div>
                              <div className="review-action">
                                <a href="#">
                                  <i className="icon-thumbs-up" />
                                  Helpful (0){" "}
                                </a>
                                <a href="#">
                                  <i className="icon-thumbs-down" />
                                  Unhelpful (0){" "}
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

export default ProductDetailPage;
