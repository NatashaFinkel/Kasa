import "../../styles/_error.scss";

function ErrorStatus() {
  return (
    <div className="error-status-div">
      <p className="error-status">
        Oups! La page que vous demandez n'existe pas.
      </p>
    </div>
  );
}

export default ErrorStatus;
