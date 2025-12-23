import {Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Shortcuts from "./components/Shortcuts";
import Html from "./components/Html";
import Css from "./components/Css";
import Tailwind from "./components/Tailwind";
import Short_begin from "./components/Short_begin";
import Short_inter from "./components/Short_inter";
import Short_advan from "./components/Short_advan";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

        <Route path="/shortcuts" element={<Shortcuts/>} />
        <Route path="/short_begin" element={<Short_begin/>} />
        <Route path="/short_inter" element={<Short_inter/>} />
        <Route path="/short_advan" element={<Short_advan/>} />

        <Route path="/html" element={<Html/>} />
        <Route path="/Css" element={<Css/>} />
        <Route path="/tailwind" element={<Tailwind/>} />
        {/* <Route path="/bootstrap" element={<Bootstrap/>} />
        <Route path="/js" element={<JavaScript/>} />
        <Route path="/sql" element={<Sql/>} />
        <Route path="/java" element={<Java/>} />
        <Route path="/mongo" element={<Mongo/>} />
        <Route path="/express" element={<Express/>} />
        <Route path="/react" element={<Reactquiz/>} />
        <Route path="/node" element={<Node/>} /> */}



      </Routes>
    </>
  );
};

export default App;
