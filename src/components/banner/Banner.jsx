import "../banner/_banner.scss";

function Banner({ image, ...props }) {
  return (
    <img src={image} className={props.className} alt="Bannière" />
  );
}

export default Banner;
