import React from "react";
import "./App.scss";

import AppRouter from "./AppRouter";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div>
      <div className="main-padding">
        <AppRouter />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
