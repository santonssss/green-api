import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [idInstance, setIdInstance] = useState("");
  const [apiTokenInstance, setApiTokenInstance] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!idInstance || !apiTokenInstance) {
      alert("Введите ID и API Token");
      return;
    }
    localStorage.setItem("idInstance", idInstance);
    localStorage.setItem("apiTokenInstance", apiTokenInstance);
    navigate("/chat");
  };

  return (
    <div className="w-screen h-screen bg-panel-header-background flex flex-col items-center justify-center">
      <img
        src="/gifs/whatsapp.gif"
        alt="WhatsApp Animation"
        className="w-32 h-32 mb-6"
      />
      <div className="bg-dropdown-background p-6 rounded-lg shadow-lg w-80">
        <h2 className="text-primary-strong text-xl font-semibold text-center mb-4">
          Вход в WhatsApp
        </h2>
        <input
          type="text"
          placeholder="ID Instance"
          value={idInstance}
          onChange={(e) => setIdInstance(e.target.value)}
          className="w-full p-2 mb-3 bg-input-background text-black border border-icon-lighter rounded focus:outline-none focus:ring-2 focus:ring-teal-light"
        />
        <input
          type="password"
          placeholder="API Token Instance"
          value={apiTokenInstance}
          onChange={(e) => setApiTokenInstance(e.target.value)}
          className="w-full p-2 mb-4 bg-input-background text-black border border-icon-lighter rounded focus:outline-none focus:ring-2 focus:ring-teal-light"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-icon-green text-white p-2 rounded transition-all duration-300 hover:bg-teal-light"
        >
          Войти
        </button>
        <p className="text-center text-icon-lighter text-sm mt-3">
          Нет аккаунта?{" "}
          <a
            href="https://green-api.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-teal-light hover:underline"
          >
            Зарегистрируйтесь в Green API
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
