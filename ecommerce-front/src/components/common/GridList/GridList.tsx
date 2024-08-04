import { Row, Col } from "react-bootstrap";

type GridListProps<T> = {
  records: T[];
  renderItem: (records: T) => React.ReactNode;
};

type HasId = { id?: number };

function GridList<T extends HasId>({ records, renderItem }: GridListProps<T>) {
  const categoriesList =
    records.length > 0
      ? records.map((record) => (
          <Col
            key={record.id}
            xs={6}
            md={3}
            className="d-flex justify-content-center mb-5 mt-2"
          >
            {renderItem(record)}
          </Col>
        ))
      : "There Are No Categories";

  return <Row>{categoriesList}</Row>;
}

export default GridList;
