import { message } from "antd";
import { useRef } from "react";
import { useParams } from "react-router-dom";
import useQuery from "../../hooks/useQuery";
import { productService } from "../../services/productService";
import { handleAddCart } from "../../store/reducer/cartReducer";
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
  const { id, name, description, shippingReturn } = productDetailData || {};

  const { data: productDetailReviews } = useQuery(
    () => id && productService.getProductReview(id),
    [id]
  );

  const handleAddToCart = async () => {
    const { value: color, reset: colorReset } = colorRef.current || {};
    const { value: quantity, reset: quantityReset } = quantityRef.current || {};
    //VALIDATE
    if (!color) {
      message.error("Please select color");
      return;
    } else if (isNaN(quantity) && quantity < 1) {
      message.error("Quantity must be greater than 1");
      return;
    }
    //ADD CART
    const addPayload = {
      addedId: id,
      addedColor: color,
      addedQuantity: quantity,
      addedPrice: price - discount,
    };
    try {
      const res = dispatch(handleAddCart(addPayload)).unwrap();
      if (res) {
        colorReset?.();
        quantityReset?.();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleAddToWishlist = () => {
    console.log("handleAddToWishlist");
  };

  const productDetailTopProps = {
    ...productDetailData,
    reviews: productDetailReviews,
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
