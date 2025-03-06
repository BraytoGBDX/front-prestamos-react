import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/LoginPage.css"; // Asegúrate de que la ruta sea correcta

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
  };

  return (
    <>
      <div className="login-container">
        <div className="login-box">
          <h2 className="login-title">¡Bienvenido!</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Correo electrónico"
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Contraseña"
              className="login-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" className="login-button">
              Registrarme
            </button>
          </form>
          <p className="login-register-text">
            ¿No tienes cuenta? 
            <span
              className="login-register-link"
              onClick={() => navigate("/register")}
            > 
              Regístrate
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
