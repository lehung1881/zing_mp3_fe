import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Home, Login, Public } from "./containers/public/index.js";
import { Routes, Route } from "react-router-dom";
import path from "./utils/path.js";

function App() {
  return (
    <h1 class="text-3xl font-bold underline">
      <Routes>
        <Route path = {path.PUBLIC} element = { <Public/> }>
          <Route path = {path.HOME} element = { <Home/> }/>
          <Route path = {path.LOGIN} element = { <Login/> }/>
        </Route>
      </Routes>
    </h1>
  );
}

export default App;
