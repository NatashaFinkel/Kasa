import React from "react";
import "./styles/_app.scss";

import AppRouter from "./AppRouter";
import AppFooter from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      
      <div className="main-padding">
        <AppRouter />
      </div>

      <footer>
        <AppFooter />
      </footer>

    </div>
  );
};

export default App;
