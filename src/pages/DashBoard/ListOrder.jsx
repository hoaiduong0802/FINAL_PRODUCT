import Button from "@/components/Button";
import { PATHS } from "@/constants/paths";
import { formatCurrency } from "@/utils/format";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const ListOrder = () => {
  const { cartInfo } = useSelector((state) => state.cart);
  const navigate = useNavigate();

  const { product, subTotal, price, quantity, variant, totalProduct } =
    cartInfo || {};
  const renderProductInfo =
    product?.map((item, index) => ({
      ...item,
      price: price?.[index],
      quantity: quantity?.[index],
      variant: variant?.[index],
      totalProduct: totalProduct?.[index],
    })) || [];

  const handleMovetoProducts = () => {
    navigate(PATHS.PRODUCTS);
  };
  return (
    <div
      className="tab-pane active"
      id="tab-orders"
      role="tabpanel"
      aria-labelledby="tab-orders-link"
    >
      <p>No order has been made yet.</p>
      <Button
        to={PATHS.PRODUCTS}
        variant="outline"
        onClick={handleMovetoProducts}
      >
        <span>GO SHOP</span>
        <i className="icon-long-arrow-right" />
      </Button>
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
          {renderProductInfo?.map((product) => {
            const { name, quantity, totalProduct, images } = product || {};
            return (
              <tr key={product?.id || ""}>
                <td className="product-col">
                  <div className="product">
                    <figure className="product-media">
                      <a href="#">
                        <img src={images[0]} alt={name} />
                      </a>
                    </figure>
                    <h3 className="product-title">
                      <a href="#">{name}</a>
                    </h3>
                  </div>
                </td>
                <td className="price-col text-center">
                  ${formatCurrency(subTotal)}
                </td>
                <td className="quantity-col text-center">{quantity}</td>
                <td className="total-col text-center">
                  ${formatCurrency(totalProduct)}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListOrder;
