import { useRef } from "react";
import { useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { message } from "antd";
import { productService } from "../../services/productService";
const useProductDetailPage = () => {
  //Initial Hooks
  const { slug } = useParams();
  const colorRef = useRef();
  const quantityRef = useRef();

  //Fetching API
  const { data: productDetailData } = useQuery(
    () => productService.getProductDetail(slug),
    [slug]
  );
  const [id, name, description, shippingReturn] = productDetailData || [];

  const { data: productDetailReviews } = useQuery(
    () => id && productService.getProductReview(id),
    [id]
  );

  const handleAddToCart = () => {
    const { value: color, reset: colorReset } = colorRef.current || {};
    const { value: quantity, reset: quantityReset } = quantityRef.current || {};
    if (!color) {
      message.error("Please select color");
      return;
    } else if (isNaN(quantity) && quantity < 1) {
      message.error("Quantity must be greater than 1");
      return;
    }

    colorReset?.();
    quantityReset?.();
  };

  const handleAddToWishlist = () => {
    console.log("handleAddToWishlist");
  };

  const productDetailTopProps = {
    ...productDetailData,
    colorRef,
    quantityRef,
    handleAddToCart,
    handleAddToWishlist,
  };

  const productDetailTabProps = {
    description,
    shippingReturn,
    reviews: productDetailReviews,
  };

  return {
    productName: name,
    productDetailTopProps,
    productDetailTabProps,
  };
};

export default useProductDetailPage;
