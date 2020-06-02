import React, {Component} from 'react';
import Card from '../components/Card';
import { Header } from "../components/header/Header";
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
        <Header/>
        <Card></Card>
      </div>
    );
  }
}
export default App;
