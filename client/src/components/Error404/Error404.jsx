import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/"); // Navigates to the home page
    console.log("object");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f8f9fa",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <h1 style={{ fontSize: "72px", margin: "0" }}>404</h1>
      <p style={{ fontSize: "24px", margin: "16px 0" }}>
        Oops! The page you're looking for doesn't exist.
      </p>
      <div>
        <button
          onClick={handleGoHome}
          style={{
            margin: "10px",
            padding: "10px 20px",
            fontSize: "16px",
            border: "none",
            backgroundColor: "#28a745",
            color: "white",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
