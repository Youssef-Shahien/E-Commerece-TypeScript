import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
//
import { Container, Row, Col } from "react-bootstrap";
import { Category } from "@components/eCommerece";
import { Loading } from "@components/feedback";
function Categories() {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );

  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            <Category {...record} />
          </Col>
        ))
      : "There Are No Categories";

  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);
  return (
    <Container>
      <Loading status={loading} error={error}>
        <Row>{categoriesList}</Row>
      </Loading>
    </Container>
  );
}

export default Categories;
