import "../error/_error.scss";

function ErrorStatus() {
  return (
    <div>
      <p className="error-status">
        Oups! La page que vous demandez n'existe pas.
      </p>
    </div>
  );
}

export default ErrorStatus;
