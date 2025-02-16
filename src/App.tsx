import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Chat from "./Pages/Chat";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Chat />} />
    </Routes>
  );
};

export default App;
