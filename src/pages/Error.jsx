import React from "react";
import ErrorIMG from "../components/ErrorIMG";
import ErrorStatus from "../components/ErrorStatus";
import GetBackFromErrorPage from "../components/BackFromErrorPage";

function Error() {
  return (
    <div className="error-main-div">
      <div>
        <ErrorIMG />
      </div>
      <div>
        <ErrorStatus />
      </div>

      <div className="get-back-to-home-page">
        <GetBackFromErrorPage />
      </div>
    </div>
  );
}

export default Error;
