import { useAppDispatch, useAppSelector } from "@store/hooks";
import { useEffect } from "react";
import {
  actGetProductsByCatPrefix,
  productsCleanUp,
} from "@store/products/productsSlice";
import { Container, Row, Col } from "react-bootstrap";
import { Product } from "@components/eCommerece";
import { useParams } from "react-router-dom";
import { Loading } from "@components/feedback";
function Products() {
  const params = useParams();
  const { loading, error, records } = useAppSelector((state) => state.products);
  const dispatch = useAppDispatch();
  const productsList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Product {...record} />
          </Col>
        ))
      : "There Are No Products";
  useEffect(() => {
    dispatch(actGetProductsByCatPrefix(params.prefix as string));

    return () => {
      dispatch(productsCleanUp());
    };
  }, [dispatch, params]);

  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{productsList}</Row>
      </Loading>
    </Container>
  );
}

export default Products;
