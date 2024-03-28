import React from "react";

function Collapse({
  title,
  hiddenContent,
  additionalDetails,
  additionalDetailsContainer,
  text,
}) {
  return (
    <details className={additionalDetails}>
      <summary className={additionalDetailsContainer}>
        {title} <i className="fa-solid fa-chevron-up"></i>
      </summary>
      {typeof hiddenContent === "object" ? (
        <ul className={text}>
          {hiddenContent.map((element) => {
            return <li key={`${element}`}> {element}</li>;
          })}
        </ul>
      ) : (
        <p className={text}>{hiddenContent}</p>
      )}
    </details>
  );
}

export default Collapse;
