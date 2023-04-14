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
    <div id="error-page" style={{ backgroudColor: "white" }}>
      <img src={Errorimage} alt="" />
      <h1>Page not found</h1>
      <p></p>
      <p>
        <Link to={`/`} replace={true}>
          <button onClick={onClickReturn}>Home</button>
        </Link>
      </p>
    </div>
  );
}

export default ErrorPage;
