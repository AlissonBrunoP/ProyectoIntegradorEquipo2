import { Link, useNavigate, useRouteError } from "react-router-dom";
import Errorimage from "../assets/Images/Iconos e imagenes/Image-error.png";

function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  const onClickReturn = () => {
    navigate(`/`, { replace: true });
  };

  return (
    <div id="error-page">
      <img src={Errorimage} alt="" />
      <h1>ps!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <Link to={`/`} replace={true}>
          <button onClick={onClickReturn}>Return to homepage</button>
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
