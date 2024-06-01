import { useNavigate } from "react-router-dom";

function ErrorMessage() {
  const navigate = useNavigate();

  return (
    <div
      role="alert"
      className="alert alert-error flex items-center justify-center"
    >
      <p className="text-xl font-medium">Something went wrong </p>
      <button className="btn btn-neutral" onClick={() => navigate("/homepage")}>
        try again
      </button>
    </div>
  );
}

export default ErrorMessage;
