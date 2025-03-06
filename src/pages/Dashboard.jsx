import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

export default function Dashboard() {
  const navigate = useNavigate();

  const handleNavigate = (page) => {
    navigate(`/${page}`); 
  };

  return (
    <div className="dashboard-container">
      <h2 className="dashboard-title">Bienvenido al Dashboard</h2>
      <div className="dashboard-buttons">
        <button
          className="dashboard-button"
          onClick={() => handleNavigate("users")}
        >
          Usuarios
        </button>
        <button
          className="dashboard-button"
          onClick={() => handleNavigate("prestamos")}
        >
          Préstamos
        </button>
        <button
          className="dashboard-button"
          onClick={() => handleNavigate("materiales")}
        >
          Materiales
        </button>
      </div>
    </div>
  );
}
