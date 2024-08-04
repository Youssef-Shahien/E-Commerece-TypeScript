import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Container} from "react-bootstrap";
import { Product } from "@components/eCommerece";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
import { GridList } from "@components/common";
import { TProduct } from "@customTypes/product";
function Products() {
  const params = useParams();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record:TProduct)=> <Product {...record} />}/>
      </Loading>
    </Container>
  );
}

export default Products;
