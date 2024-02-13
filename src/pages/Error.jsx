import ErrorIMG from "../components/error/ErrorIMG";
import ErrorStatus from "../components/error/errorStatus";
import GetBackFromErrorPage from "../components/error/BackFromErrorPage";

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
