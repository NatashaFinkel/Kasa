import "../styles/_variables.scss";

const Rating = ({ rating }) => {
  
  // Ceci crée un tableau contenant 5 éléments.
  const starsArray = Array(5).fill(0);

  const starColor = {
    red: "rgba(255, 96, 96, 1)",
    grey: "rgba(227, 227, 227, 1)",
  };

  return (
    <div className="star-container">
      {starsArray.map((_, index) => {
        return (
          <div key={index} className="star">
            <i
              className="fa-solid fa-star"
              style={{ color: rating > index ? starColor.red : starColor.grey }}
            ></i>
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
