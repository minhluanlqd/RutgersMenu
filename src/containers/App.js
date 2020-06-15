import React, { useState } from "react";
import { Header } from "../components/header/Header";
import Modal from "react-modal";
import CardMenuList from "../components/CardMenuList/CardMenuList";
import "./App.css";
import AdminPage from "../pages/admin";

Modal.setAppElement("#root");

function App() {
  const controlModal = [
    useState(false),
    useState(false),
    useState(false),
    useState(false),
  ]; //4-2
  return (
    <div className="App">
     {/* <Header clicked={controlModal} />
  <CardMenuList controlModal={controlModal} />*/}
  <AdminPage campus={['Busch', 'CollegeAve', 'Livingston', 'Cook Douglas']} />
    </div>
  );
}
export default App;
