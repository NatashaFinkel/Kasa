import React from "react";

//  <details> indique que le 
//  contenu peut-être masqué/affiché
//  par un clic sur son titre ( <summary> ).

function Collapse({
  title,
  hiddenContent,
  additionalDetails,
  additionalDetailsContainer,
  text,
}) {
  return (
    < details className={additionalDetails} >
      <summary className={additionalDetailsContainer}>
        {title} <i className="fa-solid fa-chevron-up"></i>
      </summary>

      {/* On vérifie si le hiddenContent est objet.
          Si c'est le cas, les éléments sont affichés 
          sous forme de liste. 
          Sinon, ils seront dans une balise <p>.  */}
      {
        typeof hiddenContent === "object" ? (
          <ul className={text}>
            {hiddenContent.map((element) => {
              return <li key={`${element}`}> {element}</li>;
            })}
          </ul>
        ) : (
          <p className={text}>{hiddenContent}</p>
        )}
    </details >
  );
}

export default Collapse;
