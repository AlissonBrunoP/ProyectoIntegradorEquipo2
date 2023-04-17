import { Link, useNavigate, useRouteError } from "react-router-dom";
import Errorimage from "../assets/Images/Iconos e imagenes/PokemonError.png";
import "./ErrorPage.css";


function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const navigate = useNavigate();

  const onClickReturn = () => {
    navigate(`/`, { replace: true });
  };

  return (
    <div id="error-page">
       <h1>NOT FOUND</h1>
       <h2><span style= {{marginRight: "28px"}}>4</span>
      <img className="errorImage" src={Errorimage} alt="" />4
      </h2>
        <Link to={`/`} replace={true}>
          <button className="errorButton" onClick={onClickReturn}>Home</button>
        </Link>
    </div>
  );
}

export default ErrorPage;
