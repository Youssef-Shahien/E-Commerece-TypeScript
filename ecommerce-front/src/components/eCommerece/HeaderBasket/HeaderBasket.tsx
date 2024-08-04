import { useAppSelector } from "@store/hooks";
import Logo from "@assets/svg/cart.svg?react";
import styles from "./styles.module.css";
import { getCartTotalQuantitySelector } from "@store/cart/cartSlice";
const { basketContainer, basketQuantity } = styles;

function HeaderBasket() {
  const totalQuantity = useAppSelector(getCartTotalQuantitySelector);


  return (
    <div className={basketContainer}>
      <Logo title="basket icon" />
      <div className={basketQuantity}>{totalQuantity}</div>
    </div>
  );
}

export default HeaderBasket;
