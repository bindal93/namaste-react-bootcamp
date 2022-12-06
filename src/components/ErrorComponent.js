import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const error = useRouteError();

  return (
    <div className="error-container">
      <h1>Oops!!</h1>
      <h2> Something went wrong!</h2>
      <h3> Error Details: {error.statusText || error.message}</h3>
    </div>
  );
};

export default ErrorComponent;
