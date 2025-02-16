import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const instanceId = localStorage.getItem("idInstance");
    const apiTokenInstance = localStorage.getItem("apiTokenInstance");

    if (!instanceId || !apiTokenInstance) {
      navigate("/login");
    }
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Chat />} />
    </Routes>
  );
};

export default App;
