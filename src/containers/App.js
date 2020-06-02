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
}

export default App;
