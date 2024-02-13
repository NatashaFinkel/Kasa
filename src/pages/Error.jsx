import ErrorIMG from "../components/error/ErrorIMG";
import ErrorStatus from "../components/error/errorStatus";

function Error() {
  return (
    <div className="error-main-div">
      <div>
        <ErrorIMG />
      </div>
      <div>
        <ErrorStatus />
      </div>
    </div>
  );
}

export default Error;
