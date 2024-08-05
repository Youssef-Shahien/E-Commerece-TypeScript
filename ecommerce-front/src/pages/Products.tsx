import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Container } from "react-bootstrap";
import { Product } from "@components/eCommerece";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList, Heading } from "@components/common";
import { TProduct } from "@customTypes/product";
function Products() {
  const params = useParams();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const productFullInfo = records.map((el) => ({
    ...el,
    quantity: cartItems[el.id] || 0,
  }));
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Heading>
        <span className="text-capitalize">{params.prefix}</span> Products
      </Heading>
      <Loading status={loading} error={error}>
        <GridList
          records={productFullInfo}
          renderItem={(record: TProduct) => <Product {...record} />}
        />
      </Loading>
    </Container>
  );
}

export default Products;
