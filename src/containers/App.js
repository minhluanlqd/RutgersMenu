import React, { useState } from "react";
import Card from "../components/Card";
import { Header } from "../components/header/Header";
import FoodList from "../components/Food/FoodList";
import Modal from "react-modal";
import "./App.css";

Modal.setAppElement("#root");

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const styles = {
   "align-items":"center",
    display: "flex",
    "flex-direction": "column",
  };

  return (
    <div className="App">
<<<<<<< HEAD
      <Header/>
      <Card></Card>
      
=======
      <Header />
      <Card click={() => setModalIsOpen(true)} />
      <Modal
        isOpen={modalIsOpen}
        style={{
          overlay: {
            backgroundColor: "red",
          },
        }}
      >
        <div style={styles}>
          {" "}
          <FoodList />
        </div>

        <button
          className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-pink"
          onClick={() => setModalIsOpen(false)}
        >
          Close
        </button>
      </Modal>
>>>>>>> master
    </div>
  );
}
export default App;
