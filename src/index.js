import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App.jsx";

//  Ce fichier sert de point 
//  d'entrée principal pour 
//  l'application KASA.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);