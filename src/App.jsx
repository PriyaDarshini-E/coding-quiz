import {Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Shortcuts from "./components/Shortcuts";
import Html from "./components/Html";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/shortcuts" element={<Shortcuts/>} />
        <Route path="/shortcuts" element={<Html/>} />


      </Routes>
    </>
  );
};

export default App;
