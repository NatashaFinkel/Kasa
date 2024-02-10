import homeBannerImg from "../../assets/homeBanner.png";
import "../home/_homeBanner.scss";

function HomeBanner() {
  return (
    <img
      src={homeBannerImg}
      className="home-banner"
      alt="bannière de la page d'accueil"
    ></img>
  );
}

export default HomeBanner;
