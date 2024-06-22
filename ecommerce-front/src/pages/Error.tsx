import { Link, useRouteError, isRouteErrorResponse } from "react-router-dom";
import { Container } from "react-bootstrap";

function Error() {
  const error = useRouteError();
  let errorStatus: number;
  let errorStautsText: string;

  if (isRouteErrorResponse(error)) {
    errorStatus = error.status;
    errorStautsText = error.statusText;
  } else {
    errorStatus = 404;
    errorStautsText = "Page Not Found";
  }

  return (
    <Container className="notFound">
      <h1>{errorStatus}</h1>
          <p>{errorStautsText}</p>
      <Link to="/" replace={true}>
        Looks like you've reached to non-existent page. <br />
        How about going back to safety?
      </Link>
    </Container>
  );
}

export default Error;
