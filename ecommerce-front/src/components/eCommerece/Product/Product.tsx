import { Button, Spinner } from "react-bootstrap";
import styles from "./styles.module.css";
import { TProduct } from "@customTypes/product";
import { useDispatch } from "react-redux";
import { addToCart } from "@store/cart/cartSlice";
import { memo, useEffect, useState } from "react";
const { product, productImg, maximunNotice } = styles;

const Product = memo(({ id, title, img, price, max, quantity }: TProduct) => {
  const dispatch = useDispatch();
  //Handle add To Card Btn
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);
  const currentRemainingQuantity = max - (quantity ?? 0);
  const quantityReachedToMax = currentRemainingQuantity <= 0 ? true : false;
  useEffect(() => {
    if (!isBtnDisabled) {
      return;
    }
    setIsBtnDisabled(true);

    const debounce = setTimeout(() => {
      setIsBtnDisabled(false);
    }, 300);

    return () => clearTimeout(debounce);
  }, [isBtnDisabled]);

  const addToCartHandler = () => {
    dispatch(addToCart(id));
    setIsBtnDisabled(true);
  };
  return (
    <div className={product}>
      <div className={productImg}>
        <img src={img} alt={title} />
      </div>
      <h2 title={title}>{title}</h2>
      <p className={maximunNotice}>
        {quantityReachedToMax ? (
          "You Reach To The Limited"
        ) : (
          <>
            You Can Add <span>{currentRemainingQuantity}</span> Item(s)
          </>
        )}
      </p>
      <h3>{price.toFixed(2)} EGP</h3>
      <Button
        variant="info"
        style={{ color: "white" }}
        onClick={addToCartHandler}
        disabled={isBtnDisabled || quantityReachedToMax}
      >
        {isBtnDisabled ? (
          <>
            <Spinner animation="border" size="sm" />
            Loading...
          </>
        ) : (
          "Add to Cart"
        )}
      </Button>
    </div>
  );
});

export default Product;
