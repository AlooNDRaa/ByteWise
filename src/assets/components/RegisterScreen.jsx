import React, { useState } from "react";

function RegisterScreen() {
  const [isRegistering, setIsRegistering] = useState(true);

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
  };

  return (
    <div className="register-container">
      <h2>{isRegistering ? "Crear cuenta" : "Iniciar sesión"}</h2>
      <form className="register-form">
        {isRegistering ? (
          <>
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <input
              type="password"
              placeholder="Confirmar contraseña"
              required
            />
            <button type="submit" className="submit-btn">
              Registrarse
            </button>
          </>
        ) : (
          <>
            <input type="email" placeholder="Correo electrónico" required />
            <input type="password" placeholder="Contraseña" required />
            <button type="submit" className="submit-btn">
              Iniciar sesión
            </button>
          </>
        )}
      </form>
      <p className="toggle-text">
        {isRegistering
          ? "¿Ya tienes una cuenta?"
          : "¿No tienes una cuenta?"}{" "}
        <button onClick={toggleForm} className="toggle-btn">
          {isRegistering ? "Inicia sesión aquí" : "Regístrate aquí"}
        </button>
      </p>
      <footer>
        <p>
          Al usar ByteWise, aceptas los{" "}
          <a href="/terms">Términos de uso</a>,{" "}
          <a href="/privacy">Política de privacidad</a> y{" "}
          <a href="/precontractual">Términos precontractuales</a>.
        </p>
      </footer>
    </div>
  );
}

export default RegisterScreen;
