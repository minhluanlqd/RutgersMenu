import React, { useState } from "react";
import { Header } from "../components/header/Header";
import Modal from "react-modal";
import CardMenuList from "../components/CardMenuList/CardMenuList";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  
  const controlModal = [useState(false),useState(false),useState(false),useState(false)]; //4-2
  return (
    <div className="App">
      <Header />
      <CardMenuList controlModal={controlModal} />
    </div>
  );
}
export default App;
