import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { actGetCategories } from "@store/categories/categoriesSlice";
//
import { Container} from "react-bootstrap";
import { GridList } from "@components/common";
import { Category } from "@components/eCommerece";
import { Loading } from "@components/feedback";
function Categories() {
  const dispatch = useAppDispatch();
  const { error, loading, records } = useAppSelector(
    (state) => state.categories
  );

  
  useEffect(() => {
    if (!records.length) {
      dispatch(actGetCategories());
    }
  }, [dispatch, records]);
  return (
    <Container>
      <Loading status={loading} error={error}>
        <GridList records={records} renderItem={(record)=><Category {...record} />}/>
      </Loading>
    </Container>
  );
}

export default Categories;
