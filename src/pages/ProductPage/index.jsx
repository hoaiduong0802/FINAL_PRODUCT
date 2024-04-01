// src/pages/ProductPage/index.jsx

import Pagination from "@/components/Pagination";
import React from "react";
import { Link } from "react-router-dom";
import ProductFilter from "./ProductFilter";
import ProductList from "./ProductList";
import ProductToolbox from "./ProductToolbox";
import useProductPage from "./useProductPage";
import Breadcrumb from "../../components/Breadcrumb";
import { PATHS } from "../../constants/paths";

const ProductsPage = () => {
  const { toolboxProps, productListProps, pagiProps, filterProps } =
    useProductPage();

  return (
    <main className="main">
      <div
        className="page-header text-center"
        style={{
          backgroundImage: 'url("/assets/images/page-header-bg.jpg")',
        }}
      >
        <div className="container">
          <h1 className="page-title">Product</h1>
        </div>
      </div>
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to={PATHS.HOME}>Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item isActive>Product</Breadcrumb.Item>
      </Breadcrumb>
      <div className="page-content">
        <div className="container">
          <div className="row">
            <div className="col-lg-9">
              <ProductToolbox {...toolboxProps} />
              <ProductList {...productListProps} />
              <Pagination {...pagiProps} />
            </div>
            <ProductFilter {...filterProps} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProductsPage;
