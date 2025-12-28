import { Routes, Route } from "react-router-dom";
import Welcome from "./pages/Welcome";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Shortcuts from "./components/Shortcuts";
import Short_begin from "./components/Short_begin";
import Short_inter from "./components/Short_inter";
import Short_advan from "./components/Short_advan";

import Html from "./components/Html";
import Html_begin from "./components/Html_begin";
import Html_inter from "./components/Html_inter";
import Html_advan from "./components/Html_advan";

import Css from "./components/Css";
import Css_begin from "./components/Css_begin";
import Css_inter from "./components/Css_inter";
import Css_advan from "./components/Css_advan";

import Tailwind from "./components/Tailwind";
import Tailwind_begin from "./components/Tailwind_begin";
import Tailwind_inter from "./components/Tailwind_inter";
import Tailwind_advan from "./components/Tailwind_advan";

import Bootstrap from "./components/Bootstrap";
import Bootstrap_begin from "./components/Bootstrap_begin";
import Bootstrap_advan from "./components/Bootstrap_advan";
import Bootstrap_inter from "./components/Bootstrap_inter";

import Javascript from "./components/javascript";
import Javascript_begin from "./components/javascript_begin";
import Javascript_inter from "./components/javascript_inter";
import Javascript_advan from "./components/javascript_advan";

import Sql from "./components/Sql";
import Sql_begin from "./components/Sql_begin";
import Sql_inter from "./components/Sql_inter";
import Sql_advan from "./components/Sql_advan";

import Java from "./components/Java";
import Java_begin from "./components/Java_begin";
import Java_inter from "./components/Java_inter";
import Java_advan from "./components/Java_advan";

import Mongo from "./components/Mongo";
import Mongo_begin from "./components/Mongo_begin";
import Mongo_inter from "./components/Mongo_inter";
import Mongo_advan from "./components/Mongo_advan";

import Express from "./components/Express";
import Express_begin from "./components/Express_begin";
import Express_inter from "./components/Express_inter";
import Express_advan from "./components/Express_advan";

import Reactquiz from "./components/Reactquiz";
import React_begin from "./components/React_begin";
import React_inter from "./components/React_inter";
import React_advan from "./components/React_advan";

import Node from "./components/Node";
import Node_begin from "./components/Node_begin";
import Node_inter from "./components/Node_inter";
import Node_advan from "./components/Node_advan";


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        <Route path="/shortcuts" element={<Shortcuts />} />
        <Route path="/short_begin" element={<Short_begin />} />
        <Route path="/short_inter" element={<Short_inter />} />
        <Route path="/short_advan" element={<Short_advan />} />

        <Route path="/html" element={<Html />} />
        <Route path="/html_begin" element={<Html_begin />} />
        <Route path="/html_inter" element={<Html_inter />} />
        <Route path="/html_advan" element={<Html_advan />} />


        <Route path="/css" element={<Css />} />
        <Route path="/css_begin" element={<Css_begin />} />
        <Route path="/css_inter" element={<Css_inter />} />
        <Route path="/css_advan" element={<Css_advan />} />

        <Route path="/tailwind" element={<Tailwind />} />
        <Route path="/tailwind_begin" element={<Tailwind_begin />} />
        <Route path="/tailwind_inter" element={<Tailwind_inter />} />
        <Route path="/tailwind_advan" element={<Tailwind_advan />} />

        <Route path="/bootstrap" element={<Bootstrap />} />
        <Route path="/bootstrap_begin" element={<Bootstrap_begin />} />
        <Route path="/bootstrap_inter" element={<Bootstrap_inter />} />
        <Route path="/bootstrap_advan" element={<Bootstrap_advan />} />

        <Route path="/javascript" element={<Javascript />} />
        <Route path="/javascript_begin" element={<Javascript_begin />} />
        <Route path="/javascript_inter" element={<Javascript_inter />} />
        <Route path="/javascript_advan" element={<Javascript_advan />} />

        <Route path="/sql" element={<Sql />} />
        <Route path="/sql_begin" element={<Sql_begin />} />
        <Route path="/sql_inter" element={<Sql_inter />} />
        <Route path="/sql_advan" element={<Sql_advan />} />

        <Route path="/java" element={<Java />} />
        <Route path="/java_begin" element={<Java_begin />} />
        <Route path="/java_inter" element={<Java_inter />} />
        <Route path="/java_advan" element={<Java_advan />} />

        <Route path="/mongo" element={<Mongo />} />
        <Route path="/mongo_begin" element={<Mongo_begin />} />
        <Route path="/mongo_inter" element={<Mongo_inter />} />
        <Route path="/mongo_advan" element={<Mongo_advan />} />

        <Route path="/express" element={<Express />} />
        <Route path="/express_begin" element={<Express_begin />} />
        <Route path="/express_inter" element={<Express_inter />} />
        <Route path="/express_advan" element={<Express_advan />} />

        <Route path="/react" element={<Reactquiz />} />
        <Route path="/react_begin" element={<React_begin />} />
        <Route path="/react_inter" element={<React_inter />} />
        <Route path="/react_advan" element={<React_advan />} />

        <Route path="/node" element={<Node />} />
        <Route path="/node_begin" element={<Node_begin />} />
        <Route path="/node_inter" element={<Node_inter />} />
        <Route path="/node_advan" element={<Node_advan />} />

      </Routes>
    </>
  );
};

export default App;
