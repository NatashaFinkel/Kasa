import homeBannerImg from "../../assets/homeBanner.png";

function HomeBanner() {
  return (
    <div>
      <img src={homeBannerImg}className="full-width" alt="bannière de la page d'accueil"></img>
    </div>
  );
}

export default HomeBanner;
