<<<<<<< HEAD
import React, {Component} from 'react';
import Card from '../components/Card'
import './App.css';

class App extends Component{

  state = {
    showMenu: false
  };

  toggleMenuHandler = () => {
    const doesShow = this.state.showMenu;
    this.setState({showMenu: !doesShow});
  }

  render(){
    return(
      <div className="App">
        <Card></Card>
      </div>
    );
  }
=======
import React from "react";
import Card from "../components/Card";
import "./App.css";
import { Header } from "../components/header/Header";


function App() {
  return (
    <div className="App">
      <Header/>
      <Card></Card>
    </div>
  );
>>>>>>> 0b7faba851e993dec5bc2e8260d743e5d75f99f3
}

export default App;
