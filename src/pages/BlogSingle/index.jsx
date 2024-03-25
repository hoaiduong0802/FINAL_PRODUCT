import React from "react";

const BlogSingle = () => {
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
                    <li className="active">
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
              <div className="container">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li className="breadcrumb-item">
                    <a href="#">Blog</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Sed adipiscing ornare risus.
                  </li>
                </ol>
              </div>
            </nav>
            <div className="page-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <article className="entry single-entry">
                      <div className="entry-body">
                        <figure className="entry-media">
                          <img
                            src="assets/images/blog/single/1.jpg"
                            alt="image desc"
                          />
                        </figure>
                        <h1 className="entry-title entry-title-big">
                          {" "}
                          Sed adipiscing ornare risus.{" "}
                        </h1>
                        <div className="entry-meta">
                          <span>Nov 22, 2018</span>
                          <span className="meta-separator">|</span>
                          <span className="entry-author">
                            {" "}
                            by <a href="#">John Doe</a>
                          </span>
                        </div>
                        <div className="entry-content editor-content">
                          <p>
                            Lorem ipsum dolor sit amet, consectetuer adipiscing
                            elit. Phasellus hendrerit. Pellentesque aliquet nibh
                            nec urna. In nisi neque, aliquet vel, dapibus id,
                            mattis vel, nisi. Sed pretium, ligula sollicitudin
                            laoreet viverra, tortor libero sodales leo, eget
                            blandit nunc tortor eu nibh. Nullam mollis. Ut
                            justo. Suspendisse potenti.
                          </p>
                          <p>
                            Sed egestas, ante et vulputate volutpat, eros pede
                            semper est, vitae luctus metus libero eu augue.
                            Morbi purus libero, faucibus adipiscing, commodo
                            quis, gravida id, est. Sed lectus. Praesent
                            elementum hendrerit tortor. Sed semper lorem at
                            felis. Vestibulum volutpat, lacus a{" "}
                            <a href="#">ultrices sagittis</a>, mi neque euismod
                            dui, eu pulvinar nunc sapien ornare nisl. Phasellus
                            pede arcu, dapibus eu, fermentum et, dapibus sed,
                            urna.{" "}
                          </p>
                          <p>
                            Phasellus hendrerit. Pellentesque aliquet nibh nec
                            urna. In nisi neque, aliquet vel, dapibus id, mattis
                            vel, nisi. Sed pretium, ligula{" "}
                            <a href="#">sollicitudin laoreet</a> viverra, tortor
                            libero sodales leo, eget blandit nunc tortor eu
                            nibh. Nullam mollis. Ut justo. Suspendisse potenti.
                            Sed egestas, ante et vulputate volutpat, eros pede
                            semper est, vitae luctus metus libero eu augue.
                            Morbi purus libero, faucibus adipiscing, commodo
                            quis, gravida id, est. Sed lectus. Praesent
                            elementum hendrerit tortor. Sed semper lorem at
                            felis.{" "}
                          </p>
                          <div className="pb-1" />
                          <img
                            src="assets/images/blog/single/fullwidth-sidebar/5.jpg"
                            alt="image"
                          />
                          <div className="pb-1" />
                          <p>
                            Morbi purus libero, faucibus adipiscing, commodo
                            quis, gravida id, est. Sed lectus. Praesent
                            elementum hendrerit tortor. Sed semper lorem at
                            felis. Vestibulum volutpat, lacus a ultrices
                            sagittis, mi neque euismod dui, eu pulvinar nunc
                            sapien ornare nisl. Phasellus pede arcu, dapibus eu,
                            fermentum et, dapibus sed, urna. Morbi interdum
                            mollis sapien. Sed ac risus. Phasellus lacinia,
                            magna a ullamcorper laoreet, lectus arcu pulvinar
                            risus, vitae facilisis libero dolor a purus.{" "}
                          </p>
                          <div className="pb-1" />
                          <h3>Morbi interdum mollis sapien.</h3>
                          <p>
                            Sed pretium, ligula sollicitudin laoreet viverra,
                            tortor libero sodales leo, eget blandit nunc tortor
                            eu nibh. Nullam mollis. Ut justo. Suspendisse
                            potenti. Sed egestas, ante et vulputate volutpat,
                            eros pede semper est, vitae luctus metus libero eu
                            augue. Morbi purus libero, faucibus adipiscing,
                            commodo quis, gravida id, est. Sed lectus.{" "}
                          </p>
                          <p>
                            Praesent <a href="#">elementum hendrerit</a> tortor.
                            Sed semper lorem at felis. Vestibulum volutpat,
                            lacus a ultrices sagittis, mi neque euismod dui, eu
                            pulvinar nunc sapien ornare nisl. Phasellus pede
                            arcu, dapibus eu, fermentum et, dapibus sed, urna.{" "}
                          </p>
                        </div>
                        <div className="entry-footer row no-gutters flex-column flex-md-row">
                          <div className="col-md">
                            <div className="entry-tags">
                              <span>Tags:</span>
                              <a href="#">photography</a>
                              <a href="#">style</a>
                            </div>
                          </div>
                          <div className="col-md-auto mt-2 mt-md-0">
                            <div className="social-icons social-icons-color">
                              <span className="social-label">
                                Share this post:
                              </span>
                              <a
                                href="#"
                                className="social-icon social-facebook"
                                title="Facebook"
                                target="_blank"
                              >
                                <i className="icon-facebook-f" />
                              </a>
                              <a
                                href="#"
                                className="social-icon social-twitter"
                                title="Twitter"
                                target="_blank"
                              >
                                <i className="icon-twitter" />
                              </a>
                              <a
                                href="#"
                                className="social-icon social-pinterest"
                                title="Pinterest"
                                target="_blank"
                              >
                                <i className="icon-pinterest" />
                              </a>
                              <a
                                href="#"
                                className="social-icon social-linkedin"
                                title="Linkedin"
                                target="_blank"
                              >
                                <i className="icon-linkedin" />
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                    <nav className="pager-nav" aria-label="Page navigation">
                      <a
                        className="pager-link pager-link-prev"
                        href="blog-single.html"
                        aria-label="Previous"
                        tabIndex={-1}
                      >
                        {" "}
                        Previous Post{" "}
                        <span className="pager-link-title">
                          Cras iaculis ultricies nulla
                        </span>
                      </a>
                      <a
                        className="pager-link pager-link-next"
                        href="blog-single.html"
                        aria-label="Next"
                        tabIndex={-1}
                      >
                        {" "}
                        Next Post{" "}
                        <span className="pager-link-title">
                          Praesent placerat risus
                        </span>
                      </a>
                    </nav>
                    <div className="related-posts">
                      <h3 className="title">Related Posts</h3>
                      <div
                        className="owl-carousel owl-simple"
                        data-toggle="owl"
                        data-owl-options='{
                                      "nav": false, 
                                      "dots": true,
                                      "margin": 20,
                                      "loop": false,
                                      "responsive": {
                                          "0": {
                                              "items":1
                                          },
                                          "480": {
                                              "items":2
                                          },
                                          "768": {
                                              "items":3
                                          }
                                      }
                                  }'
                      >
                        <article className="entry entry-grid">
                          <figure className="entry-media">
                            <a href="blog-single.html">
                              <img
                                src="assets/images/blog/grid/3cols/post-1.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <span>Nov 22, 2018</span>
                              <span className="meta-separator">|</span>
                              <span className="entry-author">
                                {" "}
                                by <a href="#">John Doe</a>
                              </span>
                            </div>
                            <h2 className="entry-title">
                              <a href="blog-single.html">
                                Cras ornare tristique elit.
                              </a>
                            </h2>
                          </div>
                        </article>
                        <article className="entry entry-grid">
                          <figure className="entry-media">
                            <a href="blog-single.html">
                              <img
                                src="assets/images/blog/grid/3cols/post-2.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <span>Nov 22, 2018</span>
                              <span className="meta-separator">|</span>
                              <span className="entry-author">
                                {" "}
                                by <a href="#">John Doe</a>
                              </span>
                            </div>
                            <h2 className="entry-title">
                              <a href="blog-single.html">
                                Vivamus ntulla necante.
                              </a>
                            </h2>
                          </div>
                        </article>
                        <article className="entry entry-grid">
                          <figure className="entry-media">
                            <a href="blog-single.html">
                              <img
                                src="assets/images/blog/grid/3cols/post-3.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <span>Nov 22, 2018</span>
                              <span className="meta-separator">|</span>
                              <span className="entry-author">
                                {" "}
                                by <a href="#">John Doe</a>
                              </span>
                            </div>
                            <h2 className="entry-title">
                              <a href="blog-single.html">
                                Utaliquam sollicitudin leo.
                              </a>
                            </h2>
                          </div>
                        </article>
                        <article className="entry entry-grid">
                          <figure className="entry-media">
                            <a href="blog-single.html">
                              <img
                                src="assets/images/blog/grid/3cols/post-4.jpg"
                                alt="image desc"
                              />
                            </a>
                          </figure>
                          <div className="entry-body">
                            <div className="entry-meta">
                              <span>Nov 22, 2018</span>
                              <span className="meta-separator">|</span>
                              <span className="entry-author">
                                {" "}
                                by <a href="#">John Doe</a>
                              </span>
                            </div>
                            <h2 className="entry-title">
                              <a href="blog-single.html">
                                Fusce pellentesque suscipit.
                              </a>
                            </h2>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="comments">
                      <h3 className="title">3 Comments</h3>
                      <ul>
                        <li>
                          <div className="comment">
                            <figure className="comment-media">
                              <a href="#">
                                <img
                                  src="assets/images/blog/comments/1.jpg"
                                  alt="User name"
                                />
                              </a>
                            </figure>
                            <div className="comment-body">
                              <a href="#" className="comment-reply">
                                Reply
                              </a>
                              <div className="comment-user">
                                <h4>
                                  <a href="#">Jimmy Pearson</a>
                                </h4>
                                <span className="comment-date">
                                  November 9, 2018 at 2:19 pm
                                </span>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Sed pretium, ligula sollicitudin laoreet
                                  viverra, tortor libero sodales leo, eget
                                  blandit nunc tortor eu nibh. Nullam mollis. Ut
                                  justo. Suspendisse potenti.{" "}
                                </p>
                              </div>
                            </div>
                          </div>
                          <ul>
                            <li>
                              <div className="comment">
                                <figure className="comment-media">
                                  <a href="#">
                                    <img
                                      src="assets/images/blog/comments/2.jpg"
                                      alt="User name"
                                    />
                                  </a>
                                </figure>
                                <div className="comment-body">
                                  <a href="#" className="comment-reply">
                                    Reply
                                  </a>
                                  <div className="comment-user">
                                    <h4>
                                      <a href="#">Lena Knight</a>
                                    </h4>
                                    <span className="comment-date">
                                      November 9, 2018 at 2:19 pm
                                    </span>
                                  </div>
                                  <div className="comment-content">
                                    <p>
                                      Morbi interdum mollis sapien. Sed ac
                                      risus.
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <div className="comment">
                            <figure className="comment-media">
                              <a href="#">
                                <img
                                  src="assets/images/blog/comments/3.jpg"
                                  alt="User name"
                                />
                              </a>
                            </figure>
                            <div className="comment-body">
                              <a href="#" className="comment-reply">
                                Reply
                              </a>
                              <div className="comment-user">
                                <h4>
                                  <a href="#">Johnathan Castillo</a>
                                </h4>
                                <span className="comment-date">
                                  November 9, 2018 at 2:19 pm
                                </span>
                              </div>
                              <div className="comment-content">
                                <p>
                                  Vestibulum volutpat, lacus a ultrices
                                  sagittis, mi neque euismod dui, eu pulvinar
                                  nunc sapien ornare nisl. Phasellus pede arcu,
                                  dapibus eu, fermentum et, dapibus sed, urna.
                                </p>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="reply">
                      <div className="heading">
                        <h3 className="title">Leave A Reply</h3>
                        <p className="title-desc">
                          Your email address will not be published. Required
                          fields are marked *
                        </p>
                      </div>
                      <form action="#">
                        <label htmlFor="reply-message" className="sr-only">
                          Comment
                        </label>
                        <textarea
                          name="reply-message"
                          id="reply-message"
                          cols={30}
                          rows={4}
                          className="form-control"
                          required
                          placeholder="Comment *"
                          defaultValue={""}
                        />
                        <div className="row">
                          <div className="col-md-6">
                            <label htmlFor="reply-name" className="sr-only">
                              Name
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="reply-name"
                              name="reply-name"
                              required
                              placeholder="Name *"
                            />
                          </div>
                          <div className="col-md-6">
                            <label htmlFor="reply-email" className="sr-only">
                              Email
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="reply-email"
                              name="reply-email"
                              required
                              placeholder="Email *"
                            />
                          </div>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>POST COMMENT</span>
                          <i className="icon-long-arrow-right" />
                        </button>
                      </form>
                    </div>
                  </div>
                  <aside className="col-lg-3">
                    <div className="sidebar">
                      <div className="widget widget-search">
                        <h3 className="widget-title">Search</h3>
                        <form action="#">
                          <label htmlFor="ws" className="sr-only">
                            Search in blog
                          </label>
                          <input
                            type="search"
                            className="form-control"
                            name="ws"
                            id="ws"
                            placeholder="Search in blog"
                            required
                          />
                          <button type="submit" className="btn">
                            <i className="icon-search" />
                            <span className="sr-only">Search</span>
                          </button>
                        </form>
                      </div>
                      <div className="widget widget-cats">
                        <h3 className="widget-title">Categories</h3>
                        <ul>
                          <li>
                            <a href="#">
                              Lifestyle <span>3</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Shopping <span>3</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Fashion <span>1</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Travel <span>3</span>
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              Hobbies <span>2</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="widget">
                        <h3 className="widget-title">Popular Posts</h3>
                        <ul className="posts-list">
                          <li>
                            <figure>
                              <a href="#">
                                <img
                                  src="assets/images/blog/sidebar/post-1.jpg"
                                  alt="post"
                                />
                              </a>
                            </figure>
                            <div>
                              <span>Nov 22, 2018</span>
                              <h4>
                                <a href="#">
                                  Aliquam tincidunt mauris eurisus.
                                </a>
                              </h4>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <a href="#">
                                <img
                                  src="assets/images/blog/sidebar/post-2.jpg"
                                  alt="post"
                                />
                              </a>
                            </figure>
                            <div>
                              <span>Nov 19, 2018</span>
                              <h4>
                                <a href="#">Cras ornare tristique elit.</a>
                              </h4>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <a href="#">
                                <img
                                  src="assets/images/blog/sidebar/post-3.jpg"
                                  alt="post"
                                />
                              </a>
                            </figure>
                            <div>
                              <span>Nov 12, 2018</span>
                              <h4>
                                <a href="#">
                                  Vivamus vestibulum ntulla nec ante.
                                </a>
                              </h4>
                            </div>
                          </li>
                          <li>
                            <figure>
                              <a href="#">
                                <img
                                  src="assets/images/blog/sidebar/post-4.jpg"
                                  alt="post"
                                />
                              </a>
                            </figure>
                            <div>
                              <span>Nov 25, 2018</span>
                              <h4>
                                <a href="#">
                                  Donec quis dui at dolor tempor interdum.
                                </a>
                              </h4>
                            </div>
                          </li>
                        </ul>
                      </div>
                      <div className="widget widget-banner-sidebar">
                        <div className="banner-sidebar-title">
                          ad box 280 x 280
                        </div>
                        <div className="banner-sidebar">
                          <a href="#">
                            <img
                              src="assets/images/blog/sidebar/banner.jpg"
                              alt="banner"
                            />
                          </a>
                        </div>
                      </div>
                      <div className="widget">
                        <h3 className="widget-title">Browse Tags</h3>
                        <div className="tagcloud">
                          <a href="#">fashion</a>
                          <a href="#">style</a>
                          <a href="#">women</a>
                          <a href="#">photography</a>
                          <a href="#">travel</a>
                          <a href="#">shopping</a>
                          <a href="#">hobbies</a>
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
                    <li>
                      <a href="product.html">Product</a>
                    </li>
                    <li className="active">
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

export default BlogSingle;