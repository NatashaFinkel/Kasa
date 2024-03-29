import errorImg from "../../assets/error-404-img.png";
import "../../styles/_error.scss";

function ErrorImage() {
  return <img src={errorImg} className="error-img" alt="Erreur 404"></img>;
}

export default ErrorImage;
