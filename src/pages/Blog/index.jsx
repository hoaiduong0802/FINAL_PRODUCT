import EntryComponent from "@/components/BlogEntry";
import Breadcrumb from "@/components/Breadcrumb";
import { PATHS } from "@/constants/paths";
import useQuery from "@/hooks/useQuery";
import { blogServices } from "@/services/blogServices";
import { formatDate } from "@/utils/format";
import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import WidgetBlog from "./WidgetBlog";

const Blog = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: blogsData, loading: blogsLoading } = useQuery(
    blogServices.getBlogData
  );
  const blogs = blogsData?.blogs || [];
  const blogsPagi = blogsData?.pagination || [];

  console.log("blogs", blogs);
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
                <h1 className="page-title">Blog</h1>
              </div>
            </div>
            <Breadcrumb>
              <Breadcrumb.Item>
                <Link to={PATHS.HOME}>Home</Link>
              </Breadcrumb.Item>
              <Breadcrumb.Item isActive>
                <Link to={PATHS.BLOG}>Blog</Link>
              </Breadcrumb.Item>
            </Breadcrumb>
            <div className="page-content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-9">
                    <div
                      className="entry-container max-col-2"
                      data-layout="fitRows"
                    >
                      {/* <EntryComponent /> */}
                      {blogs?.map((blog, index) => {
                        return (
                          <div
                            className="entry-item col-sm-6"
                            key={blog?.id || index}
                          >
                            <article className="entry entry-grid">
                              <figure className="entry-media">
                                <a href="blog-single.html">
                                  <img src={blog?.image} alt={blog.name} />
                                </a>
                              </figure>
                              <div className="entry-body">
                                <div className="entry-meta">
                                  <span>{formatDate(blog?.updatedAt)}</span>
                                  <span className="meta-separator">|</span>
                                  <span className="entry-author">
                                    by{" "}
                                    <Link to={PATHS.BLOG}>{blog?.author}</Link>
                                  </span>
                                </div>
                                <h2 className="entry-title">
                                  <a href="blog-single.html">{blog.name}</a>
                                </h2>
                                <div className="entry-content">
                                  <p>
                                    Sed pretium, ligula sollicitudin laoreet
                                    viverra, tortor libero sodales leo, eget
                                    blandit nunc tortor eu nibh. Suspendisse
                                    potenti. Sed egestas vulputate ...
                                  </p>
                                  <a
                                    href="blog-single.html"
                                    className="read-more"
                                  >
                                    Read More
                                  </a>
                                </div>
                              </div>
                            </article>
                          </div>
                        );
                      })}
                      {/* <div className="entry-item col-sm-6">
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
                            <div className="entry-content">
                              <p>
                                Sed pretium, ligula sollicitudin laoreet
                                viverra, tortor libero sodales leo, eget blandit
                                nunc tortor eu nibh. Suspendisse potenti. Sed
                                egestas vulputate ...
                              </p>
                              <a href="blog-single.html" className="read-more">
                                Read More
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item col-sm-6">
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
                                Vivamus vestibulum ntulla necante.
                              </a>
                            </h2>
                            <div className="entry-content">
                              <p>
                                Morbi purus libero, faucibus commodo quis,
                                gravida id, est. Vestibulumvolutpat, lacus a
                                ultrices sagittis, mi neque euismod dui ...
                              </p>
                              <a href="blog-single.html" className="read-more">
                                Read More
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item col-sm-6">
                        <article className="entry entry-grid">
                          <figure className="entry-media">
                            <a href="blog-single.html">
                              <img
                                src="assets/images/blog/grid/3cols/post-5.jpg"
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
                                Aenean dignissim pellente squefelis.
                              </a>
                            </h2>
                            <div className="entry-content">
                              <p>
                                Aliquam erat volutpat. Nam dui mi, tincidunt
                                quis, accumsan porttitor, facilisis luctus,
                                metus. Phasellus ultrices nulla quis nibh.
                                Quisque lectus ...{" "}
                              </p>
                              <a href="blog-single.html" className="read-more">
                                Read More
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item col-sm-6">
                        <article className="entry entry-grid">
                          <figure className="entry-media">
                            <a href="blog-single.html">
                              <img
                                src="assets/images/blog/grid/3cols/post-6.jpg"
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
                                Quisque volutpat mattiseros.
                              </a>
                            </h2>
                            <div className="entry-content">
                              <p>
                                Nam dui mi, tincidunt quis, accumsan porttitor,
                                facilisis luctus, metus. Phasellus ultrices
                                nulla quis nibh. Quisque lectus. Donec
                                consectetuer ...{" "}
                              </p>
                              <a href="blog-single.html" className="read-more">
                                Read More
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item col-sm-6">
                        <article className="entry entry-grid">
                          <figure className="entry-media">
                            <a href="blog-single.html">
                              <img
                                src="assets/images/blog/grid/3cols/post-7.jpg"
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
                            <div className="entry-content">
                              <p>
                                Praesent dapibus, neque id cursus faucibus,
                                tortor neque egestas auguae, eu vulputate magna
                                eros eu erat. Aliquam erat volutpat ...{" "}
                              </p>
                              <a href="blog-single.html" className="read-more">
                                Read More
                              </a>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="entry-item col-sm-6">
                        <article className="entry entry-grid">
                          <figure className="entry-media">
                            <a href="blog-single.html">
                              <img
                                src="assets/images/blog/grid/3cols/post-8.jpg"
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
                              <a href="blog-single.html">Quisque a lectus. </a>
                            </h2>
                            <div className="entry-content">
                              <p>
                                Aliquam erat volutpat. Nam dui mi, tincidunt
                                quis, accumsan porttitor, facilisis luctus,
                                metus. Phasellus ultrices nulla quis nibh.
                                Quisque lectus ...{" "}
                              </p>
                              <a href="blog-single.html" className="read-more">
                                Read More
                              </a>
                            </div>
                          </div>
                        </article>
                      </div> */}
                    </div>
                    <nav aria-label="Page navigation">
                      <ul className="pagination">
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
                  <WidgetBlog />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default Blog;
