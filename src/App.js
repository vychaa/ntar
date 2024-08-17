// import logo from './logo.svg';
import "./App.css";
import React from "react";
import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import Menu from "./screens/Menu";
import Header from "./screens/Header";
import Pots from "./Components/Pots";
import Club from "./Components/Club";
import Website from "./screens/Website";

function App() {
  return (
    <div>
      <Navbar />
      {/* <Menu/> */}
      {/* <Header/> */}
      {/* <Home /> */}
      {/* <Pots/> */}
      {/* <Club/> */}
      {/* <Coinscroll/> */}
      <Website/>
    </div>
  );
}

export default App;
