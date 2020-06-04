import React, { useState } from "react";
import Card from "./components/Card";
import { Header } from "./components/header/Header";
import FoodList from "./components/Food/FoodList";
import Modal from "react-modal";
import CardMenuList from "./components/CardMenuList/CardMenuList";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  
  const styles = {
    "align-items": "center",
    display: "flex",
    "flex-direction": "column",
  };
  const controlModal = [useState(false),useState(false),useState(false),useState(false)]; //4-2
  return (
    <div className="App">
      <Header />

      <CardMenuList controlModal={controlModal} />
    </div>
  );
}
export default App;
