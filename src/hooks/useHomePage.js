import { useState } from "react";
import { pageService } from "../services/pageService";
import { productService } from "../services/productService";
import useQuery from "./useQuery";
import { subscribeService } from "../services/subscribeService";
import useMutation from "./useMutation";
import { message } from "antd";
import { GENERAL_MESSAGE, HOME_MESSAGE } from "../constants/message";

const useHomePage = () => {
  // API Handling
  const { data: productsData } = useQuery(productService.getProducts);
  const products = productsData?.products || [];
  const featuredProducts =
    products?.filter((product) => product.featured) || [];
  const onSaleProducts = products?.filter((product) => product.onSale) || [];
  const topRatedProducts =
    products?.filter((product) => product.topRated) || [];
  const { data: homeData } = useQuery(() =>
    pageService.getPageDataByName("home")
  );
  const services = homeData?.data?.information || {};

  const brands = homeData?.data?.brands || [];
  const { data: categoriesData } = useQuery(productService.getCategories);
  const categories = categoriesData?.products || [];
  // useMutation Controlling
  const { execute: dealExecute } = useMutation(subscribeService.subscribeDeal);

  // Intro Section
  const introProducts = featuredProducts.slice(0, 3);
  const introProps = {
    introProducts,
  };

  // Hot Product Section
  const hotProductProps = {
    featuredProducts,
    onSaleProducts,
    topRatedProducts,
  };

  // Deal Section
  const dealProducts = onSaleProducts.filter((product) => product.discount > 0);
  const dealProps = {
    dealProducts,
  };

  //Brands Section
  const brandProps = {
    brands,
  };

  //Featured Section
  const [selectedCateSlug, setSelectedCateSlug] = useState("all");
  const featureProducts =
    selectedCateSlug === "all"
      ? [...(products || [])]
      : products?.filter(
          (product) => product?.category?.slug === selectedCateSlug
        );
  const featuredProps = {
    categories: [{ name: "All", slug: "all" }, ...categories],
    featureProducts,
    selectedCateSlug,
    handleSelectCate: (slug) => setSelectedCateSlug(slug),
  };

  //Services Section
  const serviceProps = {
    services,
  };

  //Get Deal Section
  const handleSubscribeDeal = (email, callback) => {
    if (email) {
      dealExecute(email, {
        onSuccess: (data) => {
          message.success(HOME_MESSAGE.dealSuccess);
          callback?.();
        },
        onFail: (error) => {
          message.error(GENERAL_MESSAGE.error);
        },
      });
    }
  };
  const getDealProps = {
    handleSubscribeDeal,
  };
  // ...

  return {
    introProps,
    hotProductProps,
    dealProps,
    brandProps,
    featuredProps,
    serviceProps,
    // ...
  };
};

export default useHomePage;
