import { Button } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { useDispatch } from "react-redux";
import { addToCart } from "@store/cart/cartSlice";
const { product, productImg } = styles;

const Product = ({ id, title, img, price }: TProduct) => {
  const dispatch = useDispatch();

  const addToCartHandler = (() => {
    dispatch(addToCart(id))
  })

  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <h3>{price} EGP</h3>
      <Button variant="info" style={{ color: "white" }} onClick={addToCartHandler}>
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
